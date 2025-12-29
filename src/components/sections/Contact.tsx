'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from '../GlassCard';
import NeonButton from '../NeonButton';
import SectionHeading from '../SectionHeading';
import AnimatedDivider from '../AnimatedDivider';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 w-full section-center" style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />
        <AnimatedDivider />

        <div className="grid md:grid-cols-2 gap-12" style={{marginTop: '1rem'}}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6" style={{marginBottom: '24px'}}>Contact Information</h3>
              <p className="text-gray-300 mb-8" style={{marginBottom: '32px'}}>
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together or just have a chat about technology!
              </p>

              <div className="space-y-4">
                <div className="flex items-center" style={{marginBottom: '16px'}}>
                  <Mail className="w-6 h-6 text-blue-400 mr-4" style={{marginRight:'16px'}} />
                  <a href="mailto:abeywickramairumi@gmail.com" className="text-blue-300 hover:text-blue-100 transition-colors">
                    abeywickramairumi@gmail.com
                  </a>
                </div>
                <div className="flex items-center" style={{marginBottom: '16px'}}>
                  <Github className="w-6 h-6 text-blue-400 mr-4" style={{marginRight:'16px'}} />
                  <a href="https://github.com/IrumiTh" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
                    https://github.com/IrumiTh
                  </a>
                </div>
                <div className="flex items-center" style={{marginBottom: '16px'}}>
                  <Linkedin className="w-6 h-6 text-blue-400 mr-4" style={{marginRight:'16px'}} />
                  <a href="https://www.linkedin.com/in/irumi-abeywickrama-44045025b/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
                    linkedin.com/in/irumi-abeywickrama
                  </a>
                </div>
                <div className="flex items-center" style={{marginBottom: '16px'}}>
                  <Phone className="w-6 h-6 text-blue-400 mr-4" style={{marginRight:'16px'}} />
                  <a href="tel:0703864050" className="text-blue-300 hover:text-blue-100 transition-colors">
                    0703864050
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2" style={{marginBottom: '8px'}}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    style={{paddingLeft: '16px', paddingRight: '16px', paddingTop:'12px', paddingBottom:'12px'}}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2" style={{marginBottom: '8px', marginTop: '8px'}}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    style={{paddingLeft: '16px', paddingRight: '16px', paddingTop:'12px', paddingBottom:'12px'}}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2" style={{marginBottom: '8px', marginTop: '8px'}}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    style={{paddingLeft: '16px', paddingRight: '16px', paddingTop:'12px', paddingBottom:'12px', marginBottom:'8px'}}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <NeonButton type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </NeonButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Floating icons */}
        {/* <div className="mt-16 flex justify-center space-x-8">
          {[
            { Icon: Mail, href: 'mailto:alex@example.com' },
            { Icon: Github, href: 'https://github.com/alexdev' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/alexdev' }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full text-blue-400 hover:text-blue-300 transition-colors neon-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div> */}
      </div>
    </section>
  );
}