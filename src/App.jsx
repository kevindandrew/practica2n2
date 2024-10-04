import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import CategoryButtons from './components/CategoryButtons';
import PhotoGrid from './components/PhotoGrid';

const apiKey = '9fb7f9338b6c04493ee93d08340b173b'; 

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('Food');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [query]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=8&format=json&nojsoncallback=1`
      );
      const data = await response.json();
      setPhotos(data.photos.photo);
    } catch (error) {
      console.error('Error fetching data from Flickr', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">SnapShot</h1>

      <SearchForm setQuery={setQuery} />
      <CategoryButtons setQuery={setQuery} />
      <h2 className="text-2xl font-semibold text-center mb-4">{query} Pictures</h2>
      <PhotoGrid photos={photos} loading={loading} />
    </div>
  );
}

export default App;
