import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function NeonButton({ children, onClick, className = '', href, type = 'button' }: NeonButtonProps) {
  const buttonClasses = `flex items-center bg-transparent border border-blue-500 text-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white neon-glow btn-padding ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    onClick?.();
  };

  if (href) {
    const isInternalLink = href.startsWith('#');
    return (
      <motion.a
        href={href}
        target={isInternalLink ? undefined : "_blank"}
        rel={isInternalLink ? undefined : "noopener noreferrer"}
        onClick={isInternalLink ? handleClick : undefined}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}