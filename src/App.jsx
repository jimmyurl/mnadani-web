import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Heart, PlusCircle, User } from 'lucide-react';

// Import your pages
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import SellPage from './pages/SellPage';
import ProfilePage from './pages/ProfilePage';

const NavigationBar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: PlusCircle, label: 'Sell', path: '/sell' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                isActive ? 'text-teal-600' : 'text-gray-500'
              }`}
            >
              <item.icon className={`w-6 h-6 ${
                isActive ? 'text-teal-600' : 'text-gray-500'
              }`} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen pb-16"> {/* Add padding bottom for navigation */}
      {children}
      <NavigationBar />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;