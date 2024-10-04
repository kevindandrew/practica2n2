import React from 'react';

function SearchForm({ setQuery }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    setQuery(searchQuery);
  };

  return (
    <form className="flex justify-center mb-6" onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="border border-gray-300 rounded-l-lg p-2 w-72"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
