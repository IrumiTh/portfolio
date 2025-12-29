'use client';

import GlassCard from '../GlassCard';
import SectionHeading from '../SectionHeading';
import AnimatedDivider from '../AnimatedDivider';

const experiences = [
  {
    title: 'Trainee Software Engineer',
    company: 'ICIEOS (PVT) LTD',
    duration: 'Oct 2025 – Present',
    description: 'Food Safety Management System | Full-Stack Development',
    responsibilities: [
      'Contributed as a full-stack developer to an enterprise compliance management platform supporting audits, digital checklists, document management, and role-based workflows.',
      'Designed and implemented RESTful APIs using Node.js and Express with Zod-based validation, improving request reliability and error handling.',
      'Integrated Azure Blob Storage with secure SAS URL generation for controlled document upload and access.',
      'Implemented authentication-related email workflows using Nodemailer and evaluated SendGrid for scalable email delivery.',
      'Built reusable React components and managed application state using Redux Toolkit.',
      'Collaborated in an Agile/Scrum environment and maintained code quality using SonarQube and clean coding practices.'
    ],
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'Azure', 'Docker', 'SonarQube']
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-4 w-full section-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />
          <AnimatedDivider />
        </div>

        <div className="space-y-8 section-margin-top">
          {experiences.map((exp, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-blue-400 text-sm">{exp.duration}</span>
              </div>
              <p className="text-blue-300 mb-4">{exp.company}</p>
              <p className="text-purple-300 font-medium mb-4">{exp.description}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}