/** @format */

import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto text-center'>
        {/* Background decoration */}
        <div className='absolute inset-0 -z-10 h-full w-full bg-[radial-linear(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(255,255,255,0))]' />

        {/* Badge */}
        <div className='inline-block mb-6'>
          <span className='px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium'>
            🚀 Open to Opportunities in Canada
          </span>
        </div>

        {/* Main Heading */}
        <h1 className='text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-tight'>
          <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            Kafayah Olaniyan
          </span>
        </h1>

        {/* Subheading */}
        <p className='text-2xl sm:text-3xl text-gray-300 mb-6 font-light'>
          Frontend Developer
        </p>

        {/* Description */}
        <p className='text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed'>
          Building beautiful, responsive web applications with React and
          JavaScript. 2+ years of professional experience at Uppist Limited.
          Express Entry eligible for Canadian immigration.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <a
            href='#projects'
            className='px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300'
          >
            View My Work
          </a>
          <a
            href='#contact'
            className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 hover:-translate-y-1 transition-all duration-300'
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className='flex justify-center animate-bounce mt-12'>
          <a
            href='#about'
            className='text-gray-400 hover:text-cyan-400 transition-colors'
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
