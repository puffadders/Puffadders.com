import React, { useState } from "react";
import { FaShoppingCart, FaArrowRight, FaFilter, FaSearch, FaStar, FaTag } from "react-icons/fa";
import storeData from "./storeData";
import { useTheme } from "../ThemeContext";

const Store = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = storeData
    .filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const categories = ["all", "apparel", "accessories", "stationery"];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0A1929]' : 'bg-white'} px-6 py-20 transition-colors duration-300`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-4 animate-fade-in-up`}>
            Puffadders Store
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            Represent the community with official Puffadders swag. 
            Wear your innovation pride.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 mb-10 border animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search swag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-9 pr-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-400 text-sm" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-3 py-2 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                >
                  <option value="all">All Categories</option>
                  {categories.filter(c => c !== "all").map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:shadow-lg border-gray-200'} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up group border`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`relative h-64 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-gray-100'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {product.onSale && (
                    <div className={`absolute top-4 left-4 ${darkMode ? 'bg-white text-[#0A1929]' : 'bg-[#0A1929] text-white'} text-xs font-bold px-3 py-1.5 rounded-full`}>
                      SALE
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} transition-colors duration-300`}>
                      {product.name}
                    </h3>
                    <span className={`text-xs ${darkMode ? 'text-gray-400 bg-white/5 border-white/10' : 'text-gray-500 bg-gray-100 border-gray-200'} px-2 py-1 rounded-full border`}>
                      {product.category}
                    </span>
                  </div>

                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {product.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-xs ${i < Math.floor(product.rating) ? (darkMode ? 'text-white' : 'text-yellow-500') : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice ? (
                        <div className="flex items-center space-x-2">
                          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                      ) : (
                        <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>
                          ${product.price}
                        </span>
                      )}
                    </div>
                    
                    <button className={`${darkMode ? 'bg-white text-[#0A1929] hover:bg-gray-200' : 'bg-[#0A1929] text-white hover:bg-[#0d2240]'} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center`}>
                      <FaShoppingCart className="mr-2 text-xs" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-12 text-center border mb-16`}>
            <div className="text-6xl text-gray-600 mb-4">-</div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>No swag found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-8 border animate-fade-in-up`} style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-2`}>
                Limited Edition Collection
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                Get exclusive Puffadders gear before it runs out. Represent the community at your next hackathon.
              </p>
            </div>
            <button className={`${darkMode ? 'border-white text-white hover:bg-white hover:text-[#0A1929]' : 'border-[#0A1929] text-[#0A1929] hover:bg-[#0A1929] hover:text-white'} bg-transparent border-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center whitespace-nowrap`}>
              View Collection
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border text-center`}>
            <h3 className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} font-bold mb-1`}>Free Shipping</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>On orders over $50</p>
          </div>
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border text-center`}>
            <h3 className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} font-bold mb-1`}>Secure Checkout</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>100% secure payments</p>
          </div>
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border text-center`}>
            <h3 className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} font-bold mb-1`}>Easy Returns</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
