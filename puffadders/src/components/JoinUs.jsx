import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const fields = [
  {
    id: "health",
    title: "Health Tech",
    description: "Build digital solutions that improve healthcare access, patient monitoring, and medical data management for communities across Kenya.",
    skills: ["Telemedicine", "Health Informatics", "Mobile Health", "Medical Devices", "Patient Data"],
  },
  {
    id: "agriculture",
    title: "AgriTech",
    description: "Create tech innovations for smart farming, crop management, and sustainable agricultural practices that empower Kenyan farmers.",
    skills: ["Smart Farming", "Crop Management", "Supply Chain", "Weather Tech", "Market Access"],
  },
  {
    id: "education",
    title: "EdTech",
    description: "Develop e-learning platforms, digital classrooms, and tools that make quality education accessible to students everywhere.",
    skills: ["E-Learning", "Digital Classrooms", "Learning Analytics", "STEM Education", "Accessibility"],
  },
  {
    id: "fintech",
    title: "FinTech",
    description: "Innovate financial solutions for payments, savings, lending, and financial inclusion that serve underserved communities.",
    skills: ["Mobile Payments", "Digital Banking", "Blockchain", "Financial Inclusion", "InsurTech"],
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
  const { darkMode } = useTheme();
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
    <div className={`min-h-screen ${darkMode ? 'bg-[#0A1929]' : 'bg-white'} transition-colors duration-300`}>
      <section className={`relative py-24 px-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/logo/puffadders banner.jpeg" 
            alt="Puffadders community" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-4`}>
            Our Focus Areas
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-2xl mx-auto mb-16`}>
            We're building solutions that matter in four key sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                onMouseEnter={() => setSelectedField(field.id)}
                onMouseLeave={() => setSelectedField(null)}
              >
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-3`}>{field.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-4`}>
                  {field.description}
                </p>
                
                <div className={`space-y-2 transition-all duration-300 ${selectedField === field.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-px w-full bg-white/10 my-3"></div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Key Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {field.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 px-6 ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-4`}>
            Your Journey
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-2xl mx-auto mb-16`}>
            Four simple steps to start making an impact
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Join", desc: "Sign up and tell us about your interests and goals" },
              { step: "02", title: "Connect", desc: "Join our community and meet fellow innovators" },
              { step: "03", title: "Build", desc: "Participate in hackathons and build real solutions" },
              { step: "04", title: "Impact", desc: "Launch your solution or kickstart your career" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${darkMode ? 'text-white/20' : 'text-[#0A1929]/15'} mb-3`}>{item.step}</div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-2`}>{item.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-4`}>
            Why Join?
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center max-w-2xl mx-auto mb-16`}>
            What you'll gain as part of the Puffadders community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} font-bold`}>-</span>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 px-6 ${darkMode ? 'bg-white/5' : 'bg-gray-50'} border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-4`}>
            Apply to Join
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-12`}>
            Ready to start your innovation journey? Fill out the form below.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="you@university.ac.ke"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>University</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="e.g., University of Nairobi"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Area of Interest</label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
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
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
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
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Why do you want to join Puffadders?</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-3 ${darkMode ? 'bg-[#0A1929] border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                placeholder="Tell us about your goals and what you hope to achieve..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full ${darkMode ? 'bg-white text-[#0A1929] hover:bg-gray-200' : 'bg-[#0A1929] text-white hover:bg-[#0d2240]'} font-semibold text-lg py-4 rounded-lg transition-all duration-300`}
            >
              Submit Application
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            By applying, you agree to receive communications from Puffadders about your application and community updates.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm max-w-2xl mx-auto`}>
          Already part of our community? Check out our latest hackathons and events on the blog.
        </p>
        <Link to="/blog" className={`inline-block mt-4 ${darkMode ? 'text-white hover:text-gray-300 border-white/30' : 'text-[#0A1929] hover:text-gray-600 border-[#0A1929]/30'} transition-colors duration-300 border-b pb-1`}>
          View Upcoming Events
        </Link>
      </section>
    </div>
  );
};

export default JoinUs;
