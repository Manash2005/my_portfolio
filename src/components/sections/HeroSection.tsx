"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 -z-10"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex h-full flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground"
        >
          Hi, I'm Manash 👋
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 font-headline text-lg md:text-2xl text-muted-foreground"
        >
          Full Stack Developer | Tech Enthusiast
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-glow-primary">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-glow-accent">
            <a href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
