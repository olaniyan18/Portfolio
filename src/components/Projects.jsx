/** @format */

import React from "react";
import weather from "../assets/imperial.jpg";
import url from "../assets/url.jpg";
import chatbot from "../assets/chatbot.png";
import image from "../assets/image.png";
import { ExternalLink, ArrowRight } from "lucide-react";

const ProjectCard = ({
  icon,
  title,
  company,
  status,
  description,
  tech,
  links,
  featured,
}) => (
  <div
    className={`group  "md:col-span-2" bg-linear-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300`}
  >
    {/* Header */}
    <div
      className={` "h-48"  bg-linear-to-br from-blue-600 via-blue-500 to-cyan-600 flex items-center justify-center text-6xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
    >
      <div className='absolute inset-0 bg-black/20' />
      {(typeof icon === "string" && icon.includes("/")) ||
      icon.includes(".") ? (
        <img
          src={icon}
          alt='project icon'
          className='relative z-10 w-full h-50 object-cover rounded-lg'
        />
      ) : (
        <span className='relative z-10'>{icon}</span>
      )}
    </div>

    {/* Content */}
    <div className='p-8'>
      <div className='flex items-start justify-between gap-4 mb-4'>
        <div>
          <h3
            className={`${featured ? "text-2xl" : "text-xl"} font-bold text-white mb-2`}
          >
            {title}
          </h3>
          <p className='text-cyan-400 font-semibold text-sm'>
            {company} • {status}
          </p>
        </div>
      </div>

      <p
        className={`text-gray-300 mb-6 leading-relaxed ${featured ? "text-lg" : "text-base"}`}
      >
        {description}
      </p>

      {/* Tech Tags */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {tech.map((t, idx) => (
          <span
            key={idx}
            className='px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400 transition-colors'
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div
        className={`flex gap-3 ${featured ? "flex-wrap" : "flex-col sm:flex-row"}`}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center justify-center gap-2 ${
              link.type === "primary"
                ? "bg-linear-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50"
                : "bg-slate-700 hover:bg-slate-600 border border-slate-600"
            } text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm group hover:-translate-y-0.5`}
          >
            {link.icon === "external" && <ExternalLink size={18} />}
            {link.label}
          </a>
        ))}
      </div>

      {featured && (
        <div className='mt-6 pt-6 border-t border-slate-600/50'>
          <p className='text-sm text-gray-400'>
            ⭐ This is one of my major professional projects that demonstrates
            full-stack capability and architectural thinking.
          </p>
        </div>
      )}
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      icon: chatbot,
      title: "AI-Powered Chatbot",
      company: "Uppist Limited",
      status: "Production",
      description:
        "Intelligent chatbot system deployed in production serving real users. Handles customer interactions with natural language understanding, context awareness, and real-time responses. Demonstrates API integration, state management, and responsive design.",
      tech: ["React", "JavaScript", "REST APIs", "Real-time Processing"],
      links: [
        {
          label: "Live Demo",
          url: "https://uppist.xyz",
          type: "primary",
          icon: "external",
        },
      ],
      featured: true,
    },
    {
      icon: image,
      title: "Multi-Tenancy Platform",
      company: "Uppist Limited",
      status: "In Development",
      description:
        "Building a scalable SaaS application with complete onboarding flow, user authentication, tenant data isolation, and role-based access control. Currently focused on polishing signup and onboarding UX.",
      tech: ["React", "JavaScript", "Responsive Design", "Authentication"],
      links: [
        {
          label: "Live Demo",
          url: "https://drive.google.com/file/d/1HOVDYRkY4zoZLKjVGDmJdKJm8TjsLWgY/view?usp=sharing",
          type: "primary",
          icon: "external",
        },
      ],
      featured: true,
    },
    {
      icon: weather,
      title: "Personal Projects",
      company: "Personal Portfolio",
      status: "Active",
      description:
        "Diverse collection of 50+ projects showcasing continuous learning. Includes React components, vanilla JavaScript applications, HTML/CSS designs, and responsive layouts. Each project demonstrates specific technical skills.",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      links: [
        {
          label: "Live Demo",
          url: "https://olaniyan18.github.io/Weather-App/",
          icon: "github",
          type: "secondary",
        },
      ],
      featured: false,
    },

    ,
    {
      icon: url,
      title: "Personal Projects",
      company: "Personal Portfolio",
      status: "Active",
      description:
        "Diverse collection of 50+ projects showcasing continuous learning. Includes React components, vanilla JavaScript applications, HTML/CSS designs, and responsive layouts. Each project demonstrates specific technical skills.",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      links: [
        {
          label: "Live Demo",
          url: "https://olaniyan18.github.io/Url-Shortening/",
          icon: "github",
          type: "secondary",
        },
      ],
      featured: false,
    },
  ];

  return (
    <section
      id='projects'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900/50'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            <span className='bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Featured Projects
            </span>
          </h2>
          <div className='w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full' />
          <p className='text-gray-400 mt-4 text-lg'>
            Showcasing my professional work and continuous learning journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* View More CTA */}
        <div className='mt-12 text-center'>
          <a
            href='https://github.com/olaniyan18'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors group'
          >
            Explore More on GitHub
            <ArrowRight
              size={24}
              className='group-hover:translate-x-1 transition-transform'
            />
          </a>
        </div>
      </div>
    </section>
  );
}
