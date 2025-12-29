'use client';

import Image from 'next/image';
import { useState } from 'react';
import GlassCard from '../GlassCard';
import NeonButton from '../NeonButton';
import SectionHeading from '../SectionHeading';
import AnimatedDivider from '../AnimatedDivider';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'STELLARION - Space Education Platform',
    description: 'Designed and developed a role-based full-stack platform for space education and community engagement.',
    image: '/stellarion-image.jpg',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    github: 'https://github.com/STELLARION-gp'  },
  {
    id: 2,
    title: 'Musicia – Music Event Management System',
    description: 'Developed a full-stack web application for event management with role-based access control.',
    image: '/musicia.jpg',
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/IrumiTh/Music-Event-Management-System'  },
  {
    id: 3,
    title: 'Fitness Microservices Suite',
    description: 'Microservices-based fitness application enabling users to track activities, receive AI-powered recommendations, and manage profiles securely.',
    image: '/fitness-app-image.jpg',
    tech: ['Spring Boot', 'WebFlux', 'PostgreSQL', 'MongoDB', 'Spring Cloud', 'RabbitMQ', 'React'],
    github: 'https://github.com/IrumiTh/fitness-app_microservice'
  },
  {
    id: 4,
    title: 'Job Listings – Job Finding & Posting System',
    description: 'A platform designed to connect job seekers and job posters, enabling seamless job applications, CV submissions, and real-time chat.',
    image: '/joblisting-image.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    github: 'https://github.com/IrumiTh/Job-Listings'
  },
  {
    id: 5,
    title: 'Chatty – QR Code Based Chat App',
    description: 'A mobile chat app designed for secure first-time messaging using QR code authentication.',
    image: '/chatty-image.png',
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/IrumiTh/Chat-App'
  },
  {
    id: 6,
    title: 'Medical Chatbot – AI-Powered Assistant',
    description: 'AI-driven chatbot for intelligent medical query handling using RAG, NLP, and vector-based document retrieval.',
    image: '/medichet-image.jpg',
    tech: ['Flask', 'LangChain', 'HuggingFace', 'Pinecone'],
    github: 'https://github.com/IrumiTh/Medical_Chatbot'  },
  {
    id: 7,
    title: 'Food Store – Cross-Platform Ordering System',
    description: 'A mobile application that streamlines food ordering and management for hotels and customers.',
    image: '/foodstore-image.jpg',
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/IrumiTh/Food-Store'  },
  {
    id: 8,
    title: 'MERN Blog – Full-Stack Blog Platform with Cloud Deployment',
    description: 'A production-ready blog application with authentication, content management, and real-time features deployed on cloud.',
    image: '/mernblog-image.jpg',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux Toolkit', 'Vite', 'Firebase', 'JWT', 'REST APIs', 'OpenAPI', 'Choreo'],
    github: 'https://github.com/IrumiTh/mern-blog'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 w-full section-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center section-margin-top">
          <SectionHeading title="Featured Projects" subtitle="What I've been working on" />
          <AnimatedDivider />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-margin-top">
          {displayedProjects.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden flex flex-col h-full p-6">
              <div className="flex-grow">
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4" style={{ marginBottom: '2rem' , gap: '0.5rem' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <NeonButton href={project.github} className="w-full py-2">
                <Github className="w-4 h-4 mr-3" />
                Code
              </NeonButton>
            </GlassCard>
          ))}
        </div>
        {projects.length > 3 && (
          <div className="text-center" style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
            <NeonButton onClick={() => setShowAll(!showAll)} className="px-8 py-3">
              {showAll ? 'View Less Projects' : 'View More Projects'}
            </NeonButton>
          </div>
        )}
      </div>
    </section>
  );
}