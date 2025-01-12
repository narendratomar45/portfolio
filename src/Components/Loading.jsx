import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-black text-white rounded-lg w-96">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="font-bold text-lg">Status</div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
          </div>
        </div>
        <div className="p-4 text-center text-xl text-gray-300">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default Loading;
