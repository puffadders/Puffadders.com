import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const timelineEvents = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Puffadders was founded with a simple idea: create a space where university students could come together to build real solutions."
  },
  {
    year: "2024",
    title: "First Hackathon",
    description: "Our inaugural hackathon brought together 100+ students from 5 universities, resulting in 20+ prototypes addressing local challenges."
  },
  {
    year: "2025",
    title: "Expanding Impact",
    description: "Now active in 10+ universities with 500+ community members, 50+ solutions built, and 20+ startups launched."
  }
];

const About = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0A1929]' : 'bg-white'} transition-colors duration-300`}>
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-6xl md:text-7xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-6`}>
            About Puffadders
          </h1>
          <div className={`w-24 h-1 ${darkMode ? 'bg-white/20' : 'bg-[#0A1929]/20'} mx-auto mb-8`}></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            We believe that the brightest ideas come from students who are given 
            the right environment, mentorship, and support to bring them to life.
          </p>
        </div>
      </section>

      <section className={`py-20 px-6 ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-6`}>Our Story</h2>
              <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                <p>
                  Puffadders started in a small classroom with a handful of students 
                  who shared one thing in common: a desire to build things that matter.
                </p>
                <p>
                  What began as informal meetups evolved into something bigger. We 
                  realized that across Kenyan universities, there were countless students 
                  with brilliant ideas but no platform to develop them.
                </p>
                <p>
                  Today, we've grown into a community that spans multiple campuses, 
                  connecting developers, designers, and innovators who are passionate 
                  about solving real problems in health, agriculture, education, and fintech.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-white/5 to-transparent' : 'bg-gradient-to-r from-gray-100/50 to-transparent'} rounded-3xl`}></div>
              <div className={`relative ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-sm rounded-3xl p-8 border`}>
                <blockquote className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} italic`}>
                  "The energy and creativity we see from students never ceases to amaze us. 
                  Every hackathon brings new ideas that have the potential to transform communities."
                </blockquote>
                <div className={`mt-6 ${darkMode ? 'text-white' : 'text-[#0A1929]'} font-medium`}>
                  - The Puffadders Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-16`}>Our Journey</h2>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-32 flex-shrink-0">
                  <span className={`text-3xl font-bold ${darkMode ? 'text-white/30' : 'text-[#0A1929]/20'}`}>{event.year}</span>
                </div>
                <div className={`flex-grow border-l-2 ${darkMode ? 'border-white/10' : 'border-gray-200'} pl-8 pb-8 relative`}>
                  <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${darkMode ? 'bg-white/20 border-white' : 'bg-gray-200 border-[#0A1929]'} border-2`}></div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-3`}>{event.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 px-6 ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-16`}>What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Innovation First", desc: "We empower students to build real-world solutions that make a difference, not just for grades, but for communities." },
              { title: "Community Driven", desc: "A collaborative space where developers, designers, and innovators come together to learn from each other." },
              { title: "Talent Discovery", desc: "Identifying and nurturing the next generation of problem-solvers who will shape Kenya's future." },
              { title: "Excellence", desc: "Pushing boundaries through hackathons and innovative projects that set new standards." },
            ].map((value, i) => (
              <div key={i} className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} pt-8`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-4`}>{value.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} text-center mb-16`}>Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "James Ngandu", role: "Chief Executive Officer", image: "/team/james ngandu.jpeg" },
              { name: "Fidel Kivumbi", role: "Chief Strategy Officer", image: "/team/fidel kivumbi.jpeg" },
              { name: "Enoch Juma", role: "Chief Technology Officer", image: "/team/enoch juma.jpeg" },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className={`w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 ${darkMode ? 'border-white/10 group-hover:border-white/30' : 'border-gray-200 group-hover:border-gray-400'} transition-all duration-300`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-1`}>{member.name}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 px-6 ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#0A1929]'} mb-6`}>
            Be Part of the Story
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-10`}>
            Whether you're a student with an idea, a mentor with experience, or a partner 
            looking to support innovation, there's a place for you at Puffadders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/joinus" className={`${darkMode ? 'bg-white text-[#0A1929] hover:bg-gray-200' : 'bg-[#0A1929] text-white hover:bg-[#0d2240]'} px-8 py-3 rounded-full font-semibold transition-all duration-300`}>
              Join the Community
            </Link>
            <Link to="/partner" className={`border-2 ${darkMode ? 'border-white/30 text-white hover:bg-white/10' : 'border-[#0A1929]/30 text-[#0A1929] hover:bg-[#0A1929]/5'} px-8 py-3 rounded-full font-semibold transition-all duration-300`}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
