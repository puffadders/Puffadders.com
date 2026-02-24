import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "./blogdata";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const blogsPerPage = 6;
  
  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const categories = ["all", ...new Set(blogs.map(blog => blog.category))];

  const handleExpand = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#0A1929] px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Puffadders Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stories, guides and updates from Kenya's fastest-growing student innovation community. 
            Discover how students are building solutions in Health, Agriculture, Education and Fintech.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-4 pr-4 py-3 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-3 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 animate-fade-in-up group border border-white/10"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {/* Blog Image with gradient based on category */}
              <div className="h-48 bg-gradient-to-br from-white/20 to-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/30">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Info - Text Only */}
                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Expanded Content */}
                {expandedBlogIndex === index && (
                  <div className="mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {blog.content}
                    </p>
                  </div>
                )}

                {/* Read More Button */}
                <button
                  onClick={() => handleExpand(index)}
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 group/btn"
                >
                  {expandedBlogIndex === index ? "Read Less" : "Read More"}
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-white text-[#0A1929] shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mt-16 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest stories from student innovators, hackathon announcements, and opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-500"
            />
            <button className="bg-white text-[#0A1929] font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Call to Action - Redirects to LinkedIn */}
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/company/puffadders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
          >
            Join the Puffadders Community on LinkedIn
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;