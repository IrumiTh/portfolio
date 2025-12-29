'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import NeonButton from '../NeonButton';
import { ChevronDown } from 'lucide-react';

const roles = ['Full Stack Developer', 'Mobile App Developer', 'AI Enthusiast'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="min-h-screen hero-center relative overflow-hidden px-4 py-20">
      {/* 3D Background - Simple floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-stretch">
          {/* Left side - Text content */}
          <motion.div
            className="w-full max-w-2xl lg:max-w-none text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Irumi Abeywickrama
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-blue-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.div>

            <motion.div
              className="space-y-4 mb-12 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Software Engineer Intern with a strong academic foundation in Computer Science (GPA 3.55) from the
                University of Colombo School of Computing. Hands-on experience in building full-stack applications
                using React, Node.js, Spring Boot, and cloud-native technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently contributing to an enterprise-scale compliance management platform, working with RESTful APIs,
                databases, clean architecture, and Agile development practices. Actively seeking an Associate Software
                Engineer role to further develop technical expertise and contribute to building scalable, secure, and
                maintainable software systems.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-btn-margin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <NeonButton href="#projects">View Projects</NeonButton>
              <NeonButton href="#contact">Contact Me</NeonButton>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="glass p-2 rounded-2xl neon-glow">
                <Image
                  src="/profile-image.jpeg"
                  alt="Alex - Software Engineer"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </section>
  );
}