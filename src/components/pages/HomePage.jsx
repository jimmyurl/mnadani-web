import React, { useState } from 'react';
import { Search, ShoppingCart, LocalOffer } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components";

// Sample product data
const PRODUCTS = [
  {
    id: '1',
    title: 'Vintage Watch',
    price: 199.99,
    description: 'Classic analog watch in excellent condition.',
    imageUrl: '/api/placeholder/300/200',
    seller: 'JohnDoe',
    condition: 'Used - Like New',
    category: 'Fashion',
    listedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Gaming Laptop',
    price: 1299.99,
    description: 'High-performance gaming laptop.',
    imageUrl: '/api/placeholder/300/200',
    seller: 'TechStore',
    condition: 'New',
    category: 'Electronics',
    listedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
];

const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Books', 'Others'];

const ProductCard = ({ product, onClick }) => (
  <Card 
    className="w-full max-w-sm mx-auto cursor-pointer transform transition-transform hover:scale-105"
    onClick={onClick}
  >
    <CardContent className="p-4">
      <img 
        src={product.imageUrl} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-2xl font-bold text-teal-600">${product.price}</p>
      <p className="text-gray-600 text-sm mb-2">{product.condition}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{product.seller}</span>
        <span className="text-sm text-gray-500">
          {new Date(product.listedDate).toLocaleDateString()}
        </span>
      </div>
    </CardContent>
  </Card>
);

const PromoBanner = () => (
  <div className="w-full bg-gradient-to-r from-teal-700 to-teal-500 p-4">
    <div className="flex items-center justify-center space-x-2">
      <LocalOffer className="text-white" size={20} />
      <p className="text-white font-bold text-sm md:text-base">
        20% OFF EVERYTHING UNTIL MONDAY!
      </p>
    </div>
  </div>
);

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTab, setCurrentTab] = useState('government');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    // Add navigation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {showSearch ? (
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            ) : (
              <h1 className="text-xl font-bold">MNadani</h1>
            )}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-teal-700 rounded-full"
              >
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-teal-700 rounded-full">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <PromoBanner />
        
        <Tabs defaultValue="government" className="w-full">
          <TabsList className="w-full bg-teal-600 text-white">
            <TabsTrigger 
              value="government"
              className="flex-1 data-[state=active]:bg-teal-700"
              onClick={() => setCurrentTab('government')}
            >
              Government
            </TabsTrigger>
            <TabsTrigger 
              value="private"
              className="flex-1 data-[state=active]:bg-teal-700"
              onClick={() => setCurrentTab('private')}
            >
              Private
            </TabsTrigger>
            <TabsTrigger 
              value="individual"
              className="flex-1 data-[state=active]:bg-teal-700"
              onClick={() => setCurrentTab('individual')}
            >
              Individual
            </TabsTrigger>
          </TabsList>

          {['government', 'private', 'individual'].map((tab) => (
            <TabsContent key={tab} value={tab} className="p-4">
              {/* Categories */}
              <div className="flex overflow-x-auto py-4 space-x-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">No products found in this category</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default HomePage;