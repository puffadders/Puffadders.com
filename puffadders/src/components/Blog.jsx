import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "./blogdata";
import { useTheme } from "../ThemeContext";

const Blog = () => {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const blogsPerPage = 6;
  
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
    <div className={`min-h-screen ${darkMode ? 'bg-[#0A1929]' : 'bg-white'} px-6 py-20 transition-colors duration-300`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-6 animate-fade-in-up`}>
            Puffadders Insights
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            Stories, guides and updates from Kenya's fastest-growing student innovation community. 
            Discover how students are building solutions in Health, Agriculture, Education and Fintech.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-6 mb-12 border animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className={`w-full pl-4 pr-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>

            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={`px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog, index) => (
            <article
              key={index}
              className={`${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 hover:shadow-lg'} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up group border`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                {blog.image ? (
                  <img 
                    src={blog.image}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('bg-gradient-to-br', 'from-white/20', 'to-white/5');
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5"></div>
                )}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/30">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3 space-x-4`}>
                  <span>{blog.author}</span>
                  <span>|</span>
                  <span>{blog.date}</span>
                  <span>|</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-3 transition-colors duration-300`}>
                  {blog.title}
                </h3>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {blog.excerpt}
                </p>

                {expandedBlogIndex === index && (
                  <div className="mb-4">
                    <div className={`h-px bg-gradient-to-r from-transparent ${darkMode ? 'via-white' : 'via-gray-300'} to-transparent mb-4`}></div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed whitespace-pre-line`}>
                      {blog.content}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => handleExpand(index)}
                  className={`inline-flex items-center ${darkMode ? 'text-white hover:text-gray-300' : 'text-[#0A1929] hover:text-gray-600'} transition-colors duration-300 group/btn`}
                >
                  {expandedBlogIndex === index ? "Read Less" : "Read More"}
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">&gt;</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className={`text-center py-12 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl border`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? darkMode ? "bg-white text-[#0A1929] shadow-lg" : "bg-[#0A1929] text-white shadow-lg"
                    : darkMode ? "bg-white/5 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10" : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-8 mt-16 text-center border`}>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-4`}>Stay Updated</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
            Get the latest stories from student innovators, hackathon announcements, and opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <button className={`${darkMode ? 'bg-white text-[#0A1929] hover:bg-gray-200' : 'bg-[#0A1929] text-white hover:bg-[#0d2240]'} font-bold px-6 py-3 rounded-lg transition-all duration-300`}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/company/puffadders" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center ${darkMode ? 'text-white hover:text-gray-300' : 'text-[#0A1929] hover:text-gray-600'} transition-colors duration-300`}
          >
            Join the Puffadders Community on LinkedIn
            <span className="ml-2">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
