import React from 'react';
import VehicleCard from './VehicleCard';
import { VehicleModel } from 'lib/api';

export interface VehicleListProps {
  models: VehicleModel[];
}

const VehicleList: React.FC<VehicleListProps> = ({ models }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <VehicleCard key={model.Model_ID} model={model} />
      ))}
    </div>
  );
};

export default VehicleList;
