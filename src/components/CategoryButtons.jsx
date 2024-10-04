import React from 'react';

function CategoryButtons({ setQuery }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setQuery('Mountain')}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Mountain
      </button>
      <button
        onClick={() => setQuery('Beaches')}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Beaches
      </button>
      <button
        onClick={() => setQuery('Birds')}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Birds
      </button>
      <button
        onClick={() => setQuery('Food')}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Food
      </button>
    </div>
  );
}

export default CategoryButtons;
