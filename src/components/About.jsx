/** @format */

import React from "react";
import { Code2, Zap, Users } from "lucide-react";

const StatCard = ({ icon: Icon, number, label }) => (
  <div className='bg-linear-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 p-8 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group'>
    <div className='flex items-center gap-4'>
      <div className='p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors'>
        <Icon className='text-blue-400' size={28} />
      </div>
      <div>
        <p className='text-3xl font-bold text-cyan-400'>{number}</p>
        <p className='text-gray-400 text-sm'>{label}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <section
      id='about'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900/50 to-slate-950'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            <span className='bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              About Me
            </span>
          </h2>
          <div className='w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full' />
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm a passionate frontend developer with{" "}
              <span className='text-cyan-400 font-semibold'>
                2+ years of professional experience
              </span>{" "}
              building responsive web applications at Uppist Limited.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed'>
              Specialized in{" "}
              <span className='text-cyan-400 font-semibold'>
                React.js, JavaScript (ES6+), HTML5, and CSS3
              </span>
              . I excel at translating design mockups into functional,
              interactive interfaces that users love.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed'>
              My approach combines{" "}
              <span className='text-cyan-400 font-semibold'>
                clean code practices, responsive design principles, and
                meticulous attention to detail
              </span>
              . I'm a quick learner who thrives in collaborative environments.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed'>
              Currently pursuing opportunities in Canada through the{" "}
              <span className='text-cyan-400 font-semibold'>
                Express Entry system
              </span>{" "}
              with a CRS score of 368. The Alberta Advantage PNP is my pathway
              to permanent residency.
            </p>

            <div className='pt-4'>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors'
              >
                Let's connect
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className='space-y-4'>
            <StatCard
              icon={Code2}
              number='2+'
              label='Years Professional Experience'
            />
            <StatCard
              icon={Zap}
              number='50+'
              label='Projects Built & Deployed'
            />
            <StatCard
              icon={Users}
              number='∞'
              label='Growth Mindset & Learning'
            />
            <div className='bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-8 rounded-xl'>
              <p className='text-sm text-gray-300 leading-relaxed'>
                <span className='text-cyan-400 font-semibold'>Tech Stack:</span>{" "}
                React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Git/GitHub, VS
                Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
