import React from 'react';

interface YearSelectorProps {
  years: number[];
  selectedYear: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ years, selectedYear, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="year" className="block text-gray-700 mb-2 font-medium">
        Model Year
      </label>
      <select
        id="year"
        className="w-full border text-gray-700 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedYear}
        onChange={onChange}
      >
        <option value="">Select a Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
