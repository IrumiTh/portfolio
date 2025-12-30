'use client';

import { useState } from 'react';
import GlassCard from '../GlassCard';
import SectionHeading from '../SectionHeading';
import AnimatedDivider from '../AnimatedDivider';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#', 'PHP', 'SQL'],
  frontend: ['React', 'Angular', 'Redux Toolkit', 'Tailwind CSS', 'SCSS', 'MUI'],
  backend: ['Node.js', 'Express', 'Spring Boot', 'Spring WebFlux', '.NET', 'REST APIs', 'JWT', 'WebSocket'],
  'databases-orms': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Prisma ORM', 'Entity Framework Core'],
  'cloud-devops': ['Azure Blob Storage', 'Docker', 'Firebase', 'Choreo', 'SonarQube', 'AWS'],
  mobile: ['Flutter', 'Kotlin'],
  architecture: ['Microservices', 'MVC', 'Clean Architecture', 'Modular Design', 'bff (Backend for Frontend)'],
  'ai-data': ['LangChain', 'HuggingFace Transformers', 'Pinecone', 'RAG Pipelines'],
  tools: ['Git', 'GitHub', 'Azure DevOps', 'Swagger / OpenAPI']
};

const categories = [
  { key: 'all', label: 'All', color: 'bg-gray-500' },
  { key: 'frontend', label: 'Frontend', color: 'bg-blue-500' },
  { key: 'backend', label: 'Backend', color: 'bg-green-500' },
  { key: 'languages', label: 'Languages', color: 'bg-purple-500' },
  { key: 'databases-orms', label: 'Databases & ORMs', color: 'bg-orange-500' },
  { key: 'cloud-devops', label: 'Cloud & DevOps', color: 'bg-cyan-500' },
  { key: 'mobile', label: 'Mobile Development', color: 'bg-teal-500' },
  { key: 'architecture', label: 'Architecture', color: 'bg-indigo-500' },
  { key: 'ai-data', label: 'AI & Data', color: 'bg-pink-500' },
  { key: 'tools', label: 'Tools', color: 'bg-yellow-500' }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return Object.entries(skills).flatMap(([category, skillList]) =>
        skillList.map(skill => ({ skill, category }))
      );
    }
    return skills[selectedCategory as keyof typeof skills]?.map(skill => ({ skill, category: selectedCategory })) || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 px-4 w-full section-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />
          <AnimatedDivider />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 skills-filter-margin" style={{marginTop: '0.5rem'}}>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}

              className={`rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.key
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
              style={{padding: '0.25rem'}}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 skills-grid-gap">
          {filteredSkills.map((item, index) => (
            <div
              key={`${item.skill}-${index}`}
              className="group relative"
            >
              <div className="glass skill-card-padding rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto skill-dot-margin group-hover:bg-blue-400 transition-colors"></div>
                  <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                    {item.skill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}