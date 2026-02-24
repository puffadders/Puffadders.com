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
  FaMapMarkerAlt
} from "react-icons/fa";

const partnershipTiers = [
  {
    level: "Campus Partner",
    contribution: "$500 - $1,000",
    icon: <FaUniversity className="text-4xl text-white" />,
    description: "Support student innovation at individual universities",
    benefits: [
      "Logo on university event materials",
      "Access to student talent pool",
      "Mentorship opportunities",
      "Quarterly impact reports"
    ]
  },
  {
    level: "Innovation Ally",
    contribution: "$1,000 - $5,000",
    icon: <FaUsers className="text-4xl text-white" />,
    description: "Fuel hackathons and innovation programs across multiple campuses",
    benefits: [
      "All Campus Partner benefits",
      "Sponsor a themed hackathon track",
      "Speaking slot at events",
      "Social media recognition",
      "Recruitment booth at events"
    ]
  },
  {
    level: "Impact Partner",
    contribution: "$5,000 - $10,000",
    icon: <FaRocket className="text-4xl text-white" />,
    description: "Drive large-scale innovation across Kenya's universities",
    benefits: [
      "All Innovation Ally benefits",
      "Named sponsor of major hackathon",
      "Executive speaking opportunity",
      "Exclusive networking session",
      "Case study collaboration",
      "Annual innovation report feature"
    ]
  },
  {
    level: "Founding Partner",
    contribution: "$10,000+",
    icon: <FaTrophy className="text-4xl text-white" />,
    description: "Shape the future of student innovation in Kenya",
    benefits: [
      "All Impact Partner benefits",
      "Named founding partner status",
      "Seat on innovation advisory board",
      "Co-branded initiatives",
      "Exclusive access to top talent",
      "Annual partner summit invitation"
    ]
  }
];

const supportWays = [
  {
    title: "Financial Support",
    description: "Fund hackathons, workshops, and innovation programs that empower student innovators across Kenya.",
    icon: <FaHeart className="text-3xl" />
  },
  {
    title: "Mentorship",
    description: "Share your expertise by mentoring student teams, judging hackathons, or leading workshops.",
    icon: <FaUsers className="text-3xl" />
  },
  {
    title: "Resources",
    description: "Provide tools, APIs, cloud credits, or hardware that students need to build their solutions.",
    icon: <FaLaptopCode className="text-3xl" />
  },
  {
    title: "Internships & Jobs",
    description: "Create pathways for student innovators to launch their careers through internships and employment.",
    icon: <FaGraduationCap className="text-3xl" />
  }
];

const impactStats = [
  { number: "10+", label: "Universities Reached", icon: <FaUniversity /> },
  { number: "500+", label: "Student Innovators", icon: <FaUsers /> },
  { number: "50+", label: "Solutions Built", icon: <FaRocket /> },
  { number: "20+", label: "Startups Launched", icon: <FaTrophy /> }
];

const PartnerWithUs = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership inquiry:", { ...formData, selectedTier });
    alert("Thank you for your interest in partnering with Puffadders! Our partnerships team will reach out within 2 business days.");
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
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Partner With Puffadders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join us in empowering the next generation of Kenyan innovators. 
            Together, we can build solutions that transform health, agriculture, 
            education, and finance.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-white mb-2 flex justify-center text-xl">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Partner Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Access Top Talent</h3>
                  <p className="text-sm text-gray-300">Connect with the brightest student innovators from Kenya's leading universities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Drive Innovation</h3>
                  <p className="text-sm text-gray-300">Support solutions that address real challenges in key sectors like health, agriculture, and education.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Build Brand Awareness</h3>
                  <p className="text-sm text-gray-300">Increase your visibility among students, universities, and the broader innovation ecosystem.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">CSR Impact</h3>
                  <p className="text-sm text-gray-300">Make a meaningful contribution to developing Kenya's future workforce and leaders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Early Access to Startups</h3>
                  <p className="text-sm text-gray-300">Get first look at emerging startups and potential investment opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-white mt-1">•</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Thought Leadership</h3>
                  <p className="text-sm text-gray-300">Position your organization at the forefront of student innovation in Kenya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Ways to Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportWays.map((way, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="text-white mb-3">{way.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{way.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{way.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
            Partnership Levels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up cursor-pointer ${
                  selectedTier === tier.level ? "ring-2 ring-white shadow-2xl shadow-white/25" : ""
                }`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                onClick={() => setSelectedTier(tier.level)}
              >
                <div className="text-center mb-4">{tier.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1 text-center">{tier.level}</h3>
                <div className="text-sm text-gray-400 mb-3 text-center">{tier.contribution}</div>
                <p className="text-xs text-gray-300 mb-4 text-center leading-relaxed">{tier.description}</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Benefits:</h4>
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start text-xs text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-2 mt-1.5"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Opportunities */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10 animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Upcoming Partnership Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0A1929] rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-white mr-2 text-sm" />
                <span className="text-white font-medium text-sm">March 2025</span>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">Health Innovation Hackathon</h3>
              <p className="text-xs text-gray-400">Sponsor a track focused on healthcare solutions</p>
            </div>
            <div className="bg-[#0A1929] rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-white mr-2 text-sm" />
                <span className="text-white font-medium text-sm">May 2025</span>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">AgriTech Summit</h3>
              <p className="text-xs text-gray-400">Support student innovations in agriculture</p>
            </div>
            <div className="bg-[#0A1929] rounded-lg p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-white mr-2 text-sm" />
                <span className="text-white font-medium text-sm">July 2025</span>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">Annual Innovation Showcase</h3>
              <p className="text-xs text-gray-400">Present to 500+ student innovators</p>
            </div>
          </div>
        </div>

        {/* Partnership Inquiry Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up" style={{ animationDelay: "1.8s" }}>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Let's Partner</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Interested in supporting student innovation? Fill out the form below and our partnerships team will reach out.
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
                  className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="Company or organization"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="you@organization.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600"
                  placeholder="+254 ..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Area of Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
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
              <label className="block text-sm font-medium text-gray-300 mb-1">Tell us more about your partnership interest</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2.5 bg-[#0A1929] border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-600 resize-none"
                placeholder="How would you like to partner with us?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#0A1929] font-bold text-lg py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group"
            >
              Submit Partnership Inquiry
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex items-center">
            <FaEnvelope className="text-white mr-3 text-xl" />
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <div className="text-sm text-white">partners@puffadders.org</div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex items-center">
            <FaPhone className="text-white mr-3 text-xl" />
            <div>
              <div className="text-xs text-gray-400">Phone</div>
              <div className="text-sm text-white">+254 700 000 000</div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex items-center">
            <FaMapMarkerAlt className="text-white mr-3 text-xl" />
            <div>
              <div className="text-xs text-gray-400">Location</div>
              <div className="text-sm text-white">Nairobi, Kenya</div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Every partnership helps us empower more student innovators to build solutions that transform communities. 
            Thank you for considering supporting our mission.
          </p>
          <div className="flex items-center justify-center mt-4 text-white text-xs">
            <span>Together, we build the next generation of problem-solvers.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;