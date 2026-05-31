import React from 'react';
import { Check } from 'lucide-react';

const SkillGroup = ({ title, skills, icon }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 p-8 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 group">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
    </div>

    {/* Skills List */}
    <ul className="space-y-3">
      {skills.map((skill, idx) => (
        <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
          <Check size={20} className="text-green-400 flex-shrink-0" />
          <span className="font-medium">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProficiencyBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <label className="text-gray-300 font-medium">{label}</label>
      <span className="text-cyan-400 font-bold">{percentage}%</span>
    </div>
    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Languages',
      icon: '📝',
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript (Learning)']
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: ['React.js', 'Responsive Design', 'Component Architecture', 'State Management']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git / GitHub', 'VS Code', 'Browser DevTools', 'Tailwind CSS', 'npm/yarn']
    },
    {
      title: 'Core Competencies',
      icon: '🎯',
      skills: ['UI/UX Implementation', 'Problem-Solving', 'Team Collaboration', 'Quick Learning']
    }
  ];

  const proficiencies = [
    { label: 'React.js', percentage: 85 },
    { label: 'JavaScript', percentage: 88 },
    { label: 'HTML/CSS', percentage: 90 },
    { label: 'Responsive Design', percentage: 87 },
    { label: 'Problem-Solving', percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group, idx) => (
            <SkillGroup key={idx} {...group} />
          ))}
        </div>

        {/* Proficiency Bars Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 border border-slate-600/50 p-8 sm:p-12 rounded-xl mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {proficiencies.slice(0, 3).map((item, idx) => (
                <ProficiencyBar key={idx} {...item} />
              ))}
            </div>
            <div>
              {proficiencies.slice(3).map((item, idx) => (
                <ProficiencyBar key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 mb-4">
            I'm committed to staying current with modern web technologies and best practices. Always exploring new frameworks, tools, and methodologies to improve code quality and development efficiency.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
              React Optimization
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
              Advanced CSS
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
              Web Performance
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}