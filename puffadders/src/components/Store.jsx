import React, { useState } from "react";
import { FaShoppingCart, FaArrowRight, FaFilter, FaSearch, FaStar, FaTag } from "react-icons/fa";
import storeData from "./storeData";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filter and sort products
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
      return 0; // featured
    });

  const categories = ["all", "apparel", "accessories", "stationery"];

  return (
    <div className="min-h-screen bg-[#0A1929] px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Puffadders Store
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Represent the community with official Puffadders swag. 
            Wear your innovation pride.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 mb-10 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search swag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-500 text-sm"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-400 text-sm" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white text-sm"
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
                className="px-3 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 animate-fade-in-up group border border-white/10"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Sale Badge */}
                  {product.onSale && (
                    <div className="absolute top-4 left-4 bg-white text-[#0A1929] text-xs font-bold px-3 py-1.5 rounded-full">
                      SALE
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-xs ${i < Math.floor(product.rating) ? 'text-white' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-white">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-white">
                          ${product.price}
                        </span>
                      )}
                    </div>
                    
                    <button className="bg-white text-[#0A1929] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center group/btn">
                      <FaShoppingCart className="mr-2 text-xs" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/10 mb-16">
            <div className="text-6xl text-gray-600 mb-4">∅</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No swag found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Featured Collection */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Limited Edition Collection
              </h2>
              <p className="text-gray-300 max-w-lg">
                Get exclusive Puffadders gear before it runs out. Represent the community at your next hackathon.
              </p>
            </div>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0A1929] transition-all duration-300 font-medium flex items-center whitespace-nowrap">
              View Collection
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Store Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center">
            
            <h3 className="text-white font-bold mb-1">Free Shipping</h3>
            <p className="text-sm text-gray-400">On orders over $50</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center">
        
            <h3 className="text-white font-bold mb-1">Secure Checkout</h3>
            <p className="text-sm text-gray-400">100% secure payments</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center">
            <h3 className="text-white font-bold mb-1">Easy Returns</h3>
            <p className="text-sm text-gray-400">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;