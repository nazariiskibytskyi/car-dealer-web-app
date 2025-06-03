import React from 'react';

interface VehicleModel {
  Model_ID: number;
  Model_Name: string;
}

interface VehicleCardProps {
  model: VehicleModel;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ model }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-gray-700">
      <p className="text-lg font-semibold">{model.Model_Name}</p>
    </div>
  );
};

export default VehicleCard;
