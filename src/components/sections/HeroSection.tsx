"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

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
  const { hero: heroImage } = placeholderImages;
  const [text] = useTypewriter({
    words: ["Hi, I'm Manash"],
    loop: 1,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home" className="relative h-screen w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex h-full items-center justify-center px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              <span>{text}</span>
              <Cursor cursorStyle='|' />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 font-headline text-lg sm:text-xl md:text-2xl text-muted-foreground"
            >
              Developer
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
          </div>
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center md:justify-end order-first md:order-last"
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              data-ai-hint={heroImage.hint}
              className="rounded-full object-cover border-4 border-primary/50 shadow-glow-primary w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
