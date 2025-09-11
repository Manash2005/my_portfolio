"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const facts = ["Creative Thinker", "Fast Learner", "Team Player"];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        <p className="mt-2 text-lg text-muted-foreground">A little bit about my journey.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 text-center">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            I'm a passionate full-stack developer who loves building visually appealing and high-performing web apps. I enjoy blending design with code and continuously learning new technologies to create seamless digital experiences.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-3">
            {facts.map((fact, index) => (
              <motion.div
                key={fact}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Badge variant="secondary" className="text-base px-4 py-2 bg-secondary text-secondary-foreground border-accent/50">
                  {fact}
                </Badge>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
