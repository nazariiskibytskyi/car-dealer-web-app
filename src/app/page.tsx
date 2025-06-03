'use client';

import { useEffect, useState } from 'react';
import Loading from '@components/Loader';
import MakeSelector from '@components/MakeSelector';
import YearSelector from '@components/YearSelector';
import NextButton from '@components/NextButton';
import { fetchVehicleMakesRaw, Make } from 'lib/api';

export default function HomePage() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    fetchVehicleMakesRaw()
      .then((data) => {
        if (data && data.Results) {
          setMakes(data.Results);
        } else {
          console.error('Unexpected response structure:', data);
        }
      })
      .catch((error) => console.error('Error fetching vehicle makes:', error));
  }, []);

  useEffect(() => {
    const startYear = 2015;
    const currentYear = new Date().getFullYear();
    const generatedYears: number[] = [];
    for (let year = startYear; year <= currentYear; year++) {
      generatedYears.push(year);
    }
    setYears(generatedYears);
  }, []);

  if (makes.length === 0 || years.length === 0) {
    return <Loading />;
  }

  const isButtonDisabled = !selectedMake || !selectedYear;
  const href = `/result/${selectedMake}/${selectedYear}`;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-white flex flex-col items-center justify-center p-4 text-gray-100">
      <h1 className="text-4xl font-bold text-outline mb-8 drop-shadow-lg">
        Front-end JS engineer test assessment - the Car Dealer App
      </h1>

      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <MakeSelector makes={makes} selectedMake={selectedMake} onChange={(e) => setSelectedMake(e.target.value)} />
        <YearSelector years={years} selectedYear={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
        <div className="flex justify-end">
          <NextButton disabled={isButtonDisabled} href={href}>
            Next
          </NextButton>
        </div>
      </form>
    </div>
  );
}
