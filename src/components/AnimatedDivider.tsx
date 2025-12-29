import { motion } from 'framer-motion';

export default function AnimatedDivider() {
  return (
    <motion.div
      className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mb-8"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />
  );
}