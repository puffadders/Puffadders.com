import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaLightbulb, FaUsers, FaTrophy, FaRocket, FaUniversity, FaHandsHelping, FaArrowRight, FaHeartbeat, FaSeedling, FaGraduationCap, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Health",
    description:
      "Building digital solutions that improve healthcare access, patient monitoring, and medical data management.",
    icon: <FaHeartbeat className="text-6xl mb-4 text-blue-300" />,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Agriculture",
    description:
      "Creating tech innovations for smart farming, crop management, and sustainable agricultural practices.",
    icon: <FaSeedling className="text-6xl mb-4 text-green-300" />,
    gradient: "from-green-600 to-green-800",
  },
  {
    title: "Education",
    description:
      "Developing e-learning platforms, digital classrooms, and tools that make quality education accessible.",
    icon: <FaGraduationCap className="text-6xl mb-4 text-purple-300" />,
    gradient: "from-purple-600 to-purple-800",
  },
  {
    title: "Fintech",
    description:
      "Innovating financial solutions for payments, savings, lending, and financial inclusion.",
    icon: <FaChartLine className="text-6xl mb-4 text-teal-300" />,
    gradient: "from-teal-600 to-teal-800",
  },
];

const stats = [
  { icon: <FaUniversity className="text-3xl" />, number: "10+", label: "Universities" },
  { icon: <FaUsers className="text-3xl" />, number: "500+", label: "Student Innovators" },
  { icon: <FaLightbulb className="text-3xl" />, number: "50+", label: "Solutions Built" },
  { icon: <FaTrophy className="text-3xl" />, number: "20+", label: "Startups Launched" },
];

const opportunities = [
  {
    title: "Build Real Solutions",
    description: "Turn your ideas into working prototypes that solve real-world problems.",
    icon: <FaRocket className="text-4xl" />,
  },
  {
    title: "Work with Industry Mentors",
    description: "Get guidance from experienced professionals in tech and business.",
    icon: <FaUsers className="text-4xl" />,
  },
  {
    title: "Access Career Opportunities",
    description: "Connect with top employers and kickstart your professional journey.",
    icon: <FaTrophy className="text-4xl" />,
  },
  {
    title: "Launch Your Startup",
    description: "Get the support you need to turn your hackathon project into a company.",
    icon: <FaRocket className="text-4xl" />,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const typedRef = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Build. Solve. Impact.",
        "Where Student Ideas Become Reality!",
        "Join Kenya's Fastest Growing Student Innovation Community!",
        "Health. Agriculture. Education. Fintech.",
        "Discover Talent. Support Innovation. Build Problem-Solvers."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    };

    if (typedRef.current) {
      new Typed(typedRef.current, options);
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sectors.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1929]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background Effects - Keeping only white/dark blue */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Puffadders
            </h1>
            <div className="text-2xl md:text-4xl font-bold mb-6 h-16 md:h-20 flex items-center justify-center">
              <span className="text-white" ref={typedRef}></span>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A university-focused innovation community empowering students to build 
              real-world solutions through hackathons, technology and collaboration.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/community" className="bg-white text-[#0A1929] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center group shadow-lg">
              Join Our Community
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/hackathons" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0A1929] inline-flex items-center justify-center">
              View Hackathons
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up border border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To discover talent, support innovation and build the next generation of problem-solvers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="text-white text-2xl">🎯</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Discover Talent</h3>
                  <p className="text-gray-400">Find and nurture the brightest student innovators across Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-white text-2xl">💡</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Support Innovation</h3>
                  <p className="text-gray-400">Provide resources, mentorship and platforms for ideas to grow</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-white text-2xl">🚀</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Build Problem-Solvers</h3>
                  <p className="text-gray-400">Create the next generation of entrepreneurs and leaders</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-white text-2xl">🌍</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Create Impact</h3>
                  <p className="text-gray-400">Solve real challenges in health, agriculture, education and fintech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sectors We Focus On
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We bring together developers, designers and innovators to solve challenges in key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in-up relative overflow-hidden border border-white/10 ${
                  currentIndex === index ? "ring-2 ring-white shadow-2xl shadow-white/25" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center animate-float">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{sector.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 px-6 bg-[#0A1929]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You'll Gain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Through our hackathons and programs, students get the opportunity to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up border border-white/10 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join Kenya's fastest-growing student innovation community. Whether you're a developer, 
              designer, or innovator, there's a place for you at PufFadders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/joinus" className="bg-white text-[#0A1929] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center group shadow-lg">
                Start Your Journey
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0A1929] inline-flex items-center justify-center">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

