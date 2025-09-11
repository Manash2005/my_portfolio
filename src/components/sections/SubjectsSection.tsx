"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Binary, HardDrive, Database, Network, Blocks, Globe } from 'lucide-react';

const subjects = [
  { name: 'Data Structures & Algorithms', icon: <Binary className="h-8 w-8 text-primary" /> },
  { name: 'Operating Systems', icon: <HardDrive className="h-8 w-8 text-primary" /> },
  { name: 'Database Management', icon: <Database className="h-8 w-8 text-primary" /> },
  { name: 'Computer Networks', icon: <Network className="h-8 w-8 text-primary" /> },
  { name: 'Object-Oriented Programming', icon: <Blocks className="h-8 w-8 text-primary" /> },
  { name: 'Web Development', icon: <Globe className="h-8 w-8 text-primary" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function SubjectsSection() {
  return (
    <motion.section 
      id="subjects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Subjects I'm Studying</h2>
        <p className="mt-2 text-lg text-muted-foreground">Key areas of my computer science curriculum.</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {subjects.map((subject) => (
          <motion.div 
            key={subject.name} 
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full bg-card/50 border border-border group-hover:border-accent/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-glow-accent">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4">
                  {subject.icon}
                </div>
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{subject.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
