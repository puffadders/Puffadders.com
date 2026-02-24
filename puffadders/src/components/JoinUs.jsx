import React, { useState } from "react";
import { FaRocket, FaUsers, FaTrophy, FaDiscord, FaGithub, FaLinkedin, FaArrowRight, FaCheckCircle, FaHeartbeat, FaSeedling, FaGraduationCap, FaChartLine, FaLaptopCode } from "react-icons/fa";

const fields = [
  {
    id: "health",
    title: "Health Tech",
    icon: <FaHeartbeat className="text-4xl text-white" />,
    description: "Build digital solutions that improve healthcare access, patient monitoring, and medical data management for communities across Kenya.",
    skills: ["Telemedicine", "Health Informatics", "Mobile Health", "Medical Devices", "Patient Data"],
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  },
  {
    id: "agriculture",
    title: "AgriTech",
    icon: <FaSeedling className="text-4xl text-white" />,
    description: "Create tech innovations for smart farming, crop management, and sustainable agricultural practices that empower Kenyan farmers.",
    skills: ["Smart Farming", "Crop Management", "Supply Chain", "Weather Tech", "Market Access"],
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  },
  {
    id: "education",
    title: "EdTech",
    icon: <FaGraduationCap className="text-4xl text-white" />,
    description: "Develop e-learning platforms, digital classrooms, and tools that make quality education accessible to students everywhere.",
    skills: ["E-Learning", "Digital Classrooms", "Learning Analytics", "STEM Education", "Accessibility"],
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  },
  {
    id: "fintech",
    title: "FinTech",
    icon: <FaChartLine className="text-4xl text-white" />,
    description: "Innovate financial solutions for payments, savings, lending, and financial inclusion that serve underserved communities.",
    skills: ["Mobile Payments", "Digital Banking", "Blockchain", "Financial Inclusion", "InsurTech"],
    discordLink: "https://discord.gg/SdnKjuN2Ny"
  }
];

const benefits = [
  "Participate in hackathons that solve real-world problems",
  "Work with industry mentors from leading tech companies",
  "Build your portfolio with real projects and solutions",
  "Connect with like-minded student innovators across Kenya",
  "Access internship and career opportunities",
  "Get support to launch your own startup",
  "Learn cutting-edge technologies and tools",
  "Join a community that celebrates innovation"
];

const JoinUs = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    field: "",
    experience: "",
    motivation: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest in Puffadders! We'll be in touch with next steps.");
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
            Join Puffadders
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Become part of Kenya's fastest-growing student innovation community. 
            Build real solutions, work with mentors, and launch your future.
          </p>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-sm text-gray-400">Universities</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Innovators</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-400">Solutions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-sm text-gray-400">Startups</div>
          </div>
        </div>

        {/* Fields Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up relative overflow-hidden group cursor-pointer border border-white/10 ${
                selectedField === field.id ? "ring-2 ring-white shadow-2xl shadow-white/25" : ""
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => setSelectedField(selectedField === field.id ? null : field.id)}
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  {field.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{field.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{field.description}</p>
                
                {/* Skills - Visible when selected or on hover */}
                <div className={`space-y-2 mb-4 transition-all duration-300 ${selectedField === field.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Key Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {field.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discord Link */}
                <a
                  href={field.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaDiscord className="mr-2" />
                  Join Discussion
                  <FaArrowRight className="ml-2 text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Journey with Puffadders</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Join</h3>
              <p className="text-sm text-gray-400">Sign up and tell us about your interests and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Connect</h3>
              <p className="text-sm text-gray-400">Join our community and meet fellow innovators</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build</h3>
              <p className="text-sm text-gray-400">Participate in hackathons and build real solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
              <p className="text-sm text-gray-400">Launch your solution or kickstart your career</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join Puffadders?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-white mt-1 flex-shrink-0 text-sm" />
                <span className="text-sm text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Apply to Join</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Ready to start your innovation journey? Fill out the form below and we'll get back to you with next steps.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="john@university.ac.ke"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">University</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                placeholder="e.g., University of Nairobi"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Area of Interest</label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
                  required
                >
                  <option value="">Select an area</option>
                  <option value="health">Health Tech</option>
                  <option value="agriculture">AgriTech</option>
                  <option value="education">EdTech</option>
                  <option value="fintech">FinTech</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
                  required
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner (Just starting)</option>
                  <option value="intermediate">Intermediate (Some projects)</option>
                  <option value="advanced">Advanced (Built solutions)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Why do you want to join Puffadders?</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600 resize-none"
                placeholder="Tell us about your goals and what you hope to achieve..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#0A1929] font-bold text-lg py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group"
            >
              Submit Application
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            By applying, you agree to receive communications from Puffadders about your application and community updates.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-bold text-white mb-4">Connect with us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/puffadders" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://discord.gg/SdnKjuN2Ny" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaDiscord className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/company/puffadders" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;