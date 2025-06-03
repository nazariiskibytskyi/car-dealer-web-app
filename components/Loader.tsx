import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-blue-500 to-white flex items-center justify-center text-gray-700">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
