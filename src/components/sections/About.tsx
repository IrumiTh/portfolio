'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from '../GlassCard';
import SectionHeading from '../SectionHeading';
import AnimatedDivider from '../AnimatedDivider';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />
        <AnimatedDivider />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Passionate Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a university student currently pursuing my degree while gaining real-world experience
                through an internship. My journey in tech began with curiosity about how things work,
                and it has evolved into a passion for creating meaningful digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a full stack developer, I enjoy working across the entire technology stack,
                from crafting beautiful user interfaces to building robust backend systems.
                Mobile app development allows me to create accessible experiences for everyone,
                and I'm fascinated by the potential of AI to solve complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="glass p-2 rounded-2xl neon-glow">
                <Image
                  src="/placeholder-avatar.svg"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                  unoptimized
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}