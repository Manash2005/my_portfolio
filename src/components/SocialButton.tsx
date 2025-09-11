
"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SocialButtonProps = {
  platform: 'GitHub' | 'LinkedIn' | 'Instagram';
  children: ReactNode;
};

const platformStyles = {
  GitHub: {
    bg: 'bg-social-github',
    icon: 'text-white',
  },
  LinkedIn: {
    bg: 'bg-social-linkedin',
    icon: 'text-white',
  },
  Instagram: {
    bg: 'bg-gradient-to-r from-social-instagram-1 via-social-instagram-2 to-social-instagram-3',
    icon: 'text-white',
  },
};

export default function SocialButton({ platform, children }: SocialButtonProps) {
  const styles = platformStyles[platform];

  return (
    <motion.div
      whileHover="hover"
      className="relative w-11 h-11"
    >
      <div className={cn(
        "relative w-full h-full flex items-center justify-center rounded-lg cursor-pointer",
        "border border-foreground/30 transition-colors duration-300",
        "hover:border-foreground/60"
      )}>
        <motion.div
          variants={{
            hover: {
              rotate: 35,
              scale: 1,
              originX: 0.5,
              originY: 0.5,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'absolute inset-0 -z-10 rounded-lg',
            styles.bg
          )}
        />
        <div className={cn("z-10", styles.icon)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
