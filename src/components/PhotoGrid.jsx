import React from 'react';

function PhotoGrid({ photos, loading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        photos.map((photo) => {
          const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
          return (
            <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={imageUrl}
                alt={photo.title}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default PhotoGrid;
