import React from 'react';
import { 
  User,
  Settings,
  ShoppingBag,
  Heart,
  LogOut,
  Star
} from 'lucide-react';

const ProfilePage = () => {
  const menuItems = [
    { icon: ShoppingBag, label: 'My Listings', count: 12 },
    { icon: Heart, label: 'Favorites', count: 8 },
    { icon: Star, label: 'Reviews', count: 4 },
    { icon: Settings, label: 'Settings', count: null },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-teal-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">Member since January 2024</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 text-teal-600" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.count !== null && (
                <span className="bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-600">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center space-x-2 mt-8 p-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;