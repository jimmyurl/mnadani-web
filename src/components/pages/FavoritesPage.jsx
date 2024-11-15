import React from 'react';
import { Heart } from 'lucide-react';

const FavoritesPage = () => {
  const favorites = []; // This would be populated from your state management

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Heart className="text-teal-600" />
        My Favorites
      </h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No favorites yet</p>
          <p className="text-gray-400 text-sm mt-2">
            Items you favorite will appear here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Favorite items would be mapped here */}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;