import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Image, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-teal-600' : 'text-gray-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-teal-600">
            mnadani Admin
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-teal-600 ${isActive('/')}`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/images"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-teal-600 ${isActive('/images')}`}
            >
              <Image className="w-4 h-4" />
              <span>Images</span>
            </Link>
            
            <Link
              to="/settings"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-teal-600 ${isActive('/settings')}`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;