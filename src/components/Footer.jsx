/** @format */

import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:olaniyankafayah@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className='border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Content */}
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h4 className='text-white font-bold text-lg mb-4'>
              Kafayah Olaniyan
            </h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Frontend developer passionate about building beautiful web
              experiences. Currently seeking opportunities in Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-bold text-lg mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#skills'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-cyan-400 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-white font-bold text-lg mb-4'>Connect</h4>
            <div className='flex gap-4'>
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300'
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-700/50 pt-8 text-center'>
          <div className='flex flex-col sm:flex-row justify-between text-center w-full items-center gap-4 text-sm text-gray-400'>
            <p>&copy; {currentYear} Kafayah Olaniyan. All rights reserved.</p>
          </div>
        </div>

        {/* Immigration Status Badge */}
        <div className='mt-8 flex justify-center'>
          <div className='px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold'>
            ✓ Express Entry Ready | CRS: 368 | Alberta Advantage PNP Eligible
          </div>
        </div>
      </div>
    </footer>
  );
}
