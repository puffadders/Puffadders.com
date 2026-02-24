import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import About from "./components/About";
import Blog from "./components/Blog";
import Store from "./components/Store";
import JoinUs from "./components/JoinUs";
import "./styles.css";
import NotFound from "./components/NotFound";
import PartnerWithUs from "./components/Partner";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <Router>
      {loading && <Loader />}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;