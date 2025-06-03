import React from 'react';
import { Make } from 'lib/api';

interface MakeSelectorProps {
  makes: Make[];
  selectedMake: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MakeSelector: React.FC<MakeSelectorProps> = ({ makes, selectedMake, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="make" className="block text-gray-700 mb-2 font-medium">
        Vehicle Make
      </label>
      <select
        id="make"
        className="w-full border text-gray-700 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedMake}
        onChange={onChange}
      >
        <option value="">Select a Make</option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MakeSelector;
