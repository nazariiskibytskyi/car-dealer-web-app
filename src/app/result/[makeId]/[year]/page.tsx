import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { fetchVehicleModelsRaw, VehicleModel } from 'lib/api';
import Link from 'next/link';

interface Params {
  makeId: string;
  year: string;
}

interface VehicleListProps {
  models: VehicleModel[];
}

const VehicleList = dynamic<VehicleListProps>(() => import('@components/VehicleList'), { suspense: true } as any);

export async function generateStaticParams() {
  return [];
}

export default async function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = params;
  let models: VehicleModel[] = [];

  try {
    const data = await fetchVehicleModelsRaw(makeId, year);
    if (data && data.Results) {
      models = data.Results;
    }
  } catch (error) {
    return (
      <div className="min-h-screen p-4 bg-gray-50 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">Vehicle Models</h1>
        <p>Error fetching vehicle models.</p>
      </div>
    );
  }

  if (!models || models.length === 0) {
    return (
      <div className="min-h-screen p-4 bg-gray-50 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">Vehicle Models</h1>
        <p>No models found for the selected make and year.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-blue-500 to-white text-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold mb-6">
          Vehicle Models for Make ID {makeId} in {year}
        </h1>
        <Link className="text-4xl font-bold mb-6" href="/">
          Return back
        </Link>
      </div>
      <Suspense fallback={<div>Loading vehicle list...</div>}>
        <VehicleList models={models} />
      </Suspense>
    </div>
  );
}
