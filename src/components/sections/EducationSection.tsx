"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: 'PW Institute of Innovation',
    location: 'Bengaluru',
    program: 'Skills Programme',
    semester: 'Third Semester',
    logo: "/images/pw-logo.webp",
    url: 'https://www.pwioi.com/',
  },
  {
    institution: 'BITS Pilani (Online)',
    location: 'Online',
    program: 'BCA Degree',
    semester: 'Second Semester',
    logo: "/images/bits-pilani-logo.webp",
    url: 'https://www.bits-pilani.ac.in/',
  },
];

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

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">My Learning Journey</h2>
        <p className="mt-2 text-lg text-muted-foreground">Where I'm currently studying and what I'm learning.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} variants={itemVariants}>
            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
              <Card className="h-full bg-card/50 border border-border group-hover:border-accent/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-glow-accent">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      width={80}
                      height={80}
                      className="rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{edu.institution}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                   <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <p className="text-foreground/90">{edu.program}</p>
                   </div>
                   <p className="text-sm text-muted-foreground pl-7">{edu.semester}</p>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
