
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send, Github, Linkedin, Instagram } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import data from '@/lib/data.json';

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

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const { name, title, resumeUrl, socialLinks } = data;
const { hero: content } = data.pageContent;

export default function HeroSection() {
  const { hero: heroImage } = placeholderImages;
  
  const [text] = useTypewriter({
    words: [content.typewriterText.replace('{name}', name)],
    loop: 1,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-[1] bg-black/50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex h-full items-center justify-center px-4 relative z-[2]"
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
              {title}
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-white font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#E43636] to-[#3B060A] btn-glare">
                <a href={resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" />
                  {content.buttons.downloadResume}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:bg-secondary hover:text-secondary-foreground border-2">
                <a href="#contact">
                  <Send className="mr-2 h-5 w-5" />
                  {content.buttons.contactMe}
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name as keyof typeof iconMap] || Github;
                return (
                  <Button key={link.name} variant="outline" size="icon" className="rounded-full border-foreground/50 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110" asChild>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </motion.div>
          </div>
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center md:justify-end order-first md:order-last"
          >
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                data-ai-hint={heroImage.hint}
                className="relative z-10 rounded-full object-cover w-full h-full border-4 border-primary/50"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
