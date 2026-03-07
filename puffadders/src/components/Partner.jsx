import React, { useState } from "react";
import {
  FaHandshake,
  FaUniversity,
  FaUsers,
  FaRocket,
  FaHeart,
  FaGithub,
  FaArrowRight,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaLightbulb,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const supportWays = [
  {
    title: "Financial Support",
    description: "Fund hackathons, workshops, and innovation programs that empower student innovators across Kenya.",
    icon: <FaHeart className="text-3xl text-white" />
  },
  {
    title: "Mentorship",
    description: "Share your expertise by mentoring student teams, judging hackathons, or leading workshops.",
    icon: <FaUsers className="text-3xl text-white" />
  },
  {
    title: "Resources",
    description: "Provide tools, APIs, cloud credits, or hardware that students need to build their solutions.",
    icon: <FaLaptopCode className="text-3xl text-white" />
  },
  {
    title: "Internships & Jobs",
    description: "Create pathways for student innovators to launch their careers through internships and employment.",
    icon: <FaGraduationCap className="text-3xl text-white" />
  }
];

const partnerDropdowns = [
  {
    title: "General Partnership",
    content: "Puffadders partners with organizations, companies, and individuals who share our vision of empowering student innovation in Kenya. As a general partner, you gain access to our network of 500+ student innovators from 10+ universities. Partners receive brand visibility at our events, access to talent pipelines, and the opportunity to shape the next generation of tech leaders. We tailor partnerships to align with your goals, whether it's CSR, recruitment, brand awareness, or innovation scouting."
  },
  {
    title: "Event Sponsorship",
    content: "Sponsor our flagship hackathons, workshops, and innovation bootcamps. Event sponsors receive prominent branding, speaking slots, mentorship opportunities, and direct access to participating students. Our events attract hundreds of skilled developers, designers, and innovators ready to build solutions across health, agriculture, education, and fintech."
  },
  {
    title: "University Chapters",
    content: "Partner with us to establish or support Puffadders chapters at universities across Kenya. University chapter partners help fund local events, provide mentorship, and create direct pipelines between their organizations and campus talent. Current chapters operate in Nairobi, Eldoret, Kisumu, and Mombasa with plans to expand to all major university towns."
  },
  {
    title: "Corporate Innovation Programs",
    content: "Engage Puffadders student teams to solve real challenges within your organization through structured innovation programs. We match your problem statements with our most talented student teams who prototype, test, and present solutions. This gives you access to fresh perspectives while providing students with real-world experience."
  },
  {
    title: "Our Team",
    content: "team"
  }
];

const teamMembers = [
  { name: "James Ngandu", role: "Chief Executive Officer", image: "/team/james ngandu.jpeg" },
  { name: "Fidel Kivumbi", role: "Chief Strategy Officer", image: "/team/fidel kivumbi.jpeg" },
  { name: "Enoch Juma", role: "Chief Technology Officer", image: "/team/enoch juma.jpeg" },
];

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const { darkMode } = useTheme();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership inquiry:", formData);
    alert("Thank you for your interest in partnering with Puffadders! Our partnerships team will reach out within 2 business days.");
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0A1929]' : 'bg-white'} px-6 py-20 transition-colors duration-300`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${darkMode ? 'bg-white/5' : 'bg-gray-100'} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-4 animate-fade-in-up`}>
            Partner With Puffadders
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed animate-fade-in-up`} style={{ animationDelay: "0.2s" }}>
            Join us in empowering the next generation of Kenyan innovators. 
            Together, we can build solutions that transform health, agriculture, 
            education, and finance.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-8 mb-16 border animate-fade-in-up`} style={{ animationDelay: "0.5s" }}>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-6 text-center`}>Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Access Top Talent", desc: "Connect with the brightest student innovators from Kenya's leading universities." },
              { title: "Drive Innovation", desc: "Support solutions that address real challenges in key sectors like health, agriculture, and education." },
              { title: "Build Brand Awareness", desc: "Increase your visibility among students, universities, and the broader innovation ecosystem." },
              { title: "CSR Impact", desc: "Make a meaningful contribution to developing Kenya's future workforce and leaders." },
              { title: "Early Access to Startups", desc: "Get first look at emerging startups and potential investment opportunities." },
              { title: "Thought Leadership", desc: "Position your organization at the forefront of student innovation in Kenya." },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} mt-1 text-lg`}>-</div>
                <div>
                  <h3 className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} font-bold mb-1`}>{item.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-8 text-center animate-fade-in-up`} style={{ animationDelay: "0.6s" }}>
            Ways to Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportWays.map((way, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-200 hover:shadow-lg'} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className={`${darkMode ? '' : '[&>svg]:text-[#0A1929]'} mb-3 flex justify-center`}>{way.icon}</div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-2 text-center`}>{way.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-center`}>{way.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-8 text-center animate-fade-in-up`} style={{ animationDelay: "0.85s" }}>
            Learn More About Partnerships
          </h2>
          <div className="max-w-4xl mx-auto space-y-3">
            {partnerDropdowns.map((item, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl border overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`w-full flex items-center justify-between p-5 text-left ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'} transition-all duration-300`}
                >
                  <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>{item.title}</span>
                  {openDropdown === index ? (
                    <FaChevronUp className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} text-sm flex-shrink-0`} />
                  ) : (
                    <FaChevronDown className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} text-sm flex-shrink-0`} />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openDropdown === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    {item.content === "team" ? (
                      <div className="grid md:grid-cols-3 gap-6 pt-2">
                        {teamMembers.map((member, i) => (
                          <div key={i} className="text-center group">
                            <div className={`w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border-3 ${darkMode ? 'border-white/10 group-hover:border-white/30' : 'border-gray-200 group-hover:border-gray-400'} transition-all duration-300`}>
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>{member.name}</h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-2xl p-8 border animate-fade-in-up`} style={{ animationDelay: "0.9s" }}>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-2 text-center`}>Let's Partner</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-8 max-w-2xl mx-auto`}>
            Interested in supporting student innovation? Fill out the form below and our partnerships team will reach out.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Company or organization"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="you@organization.com"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="+254 ..."
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Area of Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white' : 'bg-white border-gray-300 text-[#0A1929]'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              >
                <option value="">Select partnership interest</option>
                <option value="financial">Financial Support</option>
                <option value="mentorship">Mentorship</option>
                <option value="resources">Resources / Tools</option>
                <option value="internships">Internships / Jobs</option>
                <option value="event">Event Sponsorship</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Tell us more about your partnership interest</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                className={`w-full px-4 py-2.5 ${darkMode ? 'bg-[#0A1929] border-white/20 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-[#0A1929] placeholder-gray-400'} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                placeholder="How would you like to partner with us?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full ${darkMode ? 'bg-white text-[#0A1929] hover:bg-gray-200' : 'bg-[#0A1929] text-white hover:bg-[#0d2240]'} font-bold text-lg py-3 rounded-lg transition-all duration-300 flex items-center justify-center group`}
            >
              Submit Partnership Inquiry
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border flex items-center`}>
            <FaEnvelope className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} mr-3 text-xl`} />
            <div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</div>
              <div className={`text-sm ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>thepuffadders@gmail.com</div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border flex items-center`}>
            <FaPhone className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} mr-3 text-xl`} />
            <div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</div>
              <div className={`text-sm ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>+254 746 230 648</div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-5 border flex items-center`}>
            <FaMapMarkerAlt className={`${darkMode ? 'text-white' : 'text-[#0A1929]'} mr-3 text-xl`} />
            <div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</div>
              <div className={`text-sm ${darkMode ? 'text-white' : 'text-[#0A1929]'}`}>Nairobi, Kenya</div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-xl p-6 border`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm max-w-2xl mx-auto`}>
            Every partnership helps us empower more student innovators to build solutions that transform communities. 
            Thank you for considering supporting our mission.
          </p>
          <div className={`flex items-center justify-center mt-4 ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-xs`}>
            <span>Together, we build the next generation of problem-solvers.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
