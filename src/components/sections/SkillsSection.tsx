"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  HtmlIcon, 
  CssIcon, 
  JavaScriptIcon, 
  BootstrapIcon, 
  CIcon, 
  CppIcon, 
  PythonIcon, 
  MySqlIcon,
  JavaIcon,
  CanvaIcon,
  ExcelIcon,
  GoogleSheetsIcon
} from '@/components/icons';
import { useState } from 'react';

const skills = [
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'C', icon: <CIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'MySQL', icon: <MySqlIcon /> },
  { name: 'Canva', icon: <CanvaIcon /> },
  { name: 'MS Excel', icon: <ExcelIcon /> },
  { name: 'Google Sheets', icon: <GoogleSheetsIcon /> },
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

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getAnimation = (skillName: string) => {
    if (hoveredSkill === null) {
      return { scale: 1 };
    }
    return {
      scale: hoveredSkill === skillName ? 1.1 : 0.9,
    };
  };

  return (
    <section id="skills" className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/20 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">My Toolkit</h2>
        <p className="mt-2 text-lg text-muted-foreground">Technologies I use to build amazing things.</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            variants={itemVariants}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            animate={getAnimation(skill.name)}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Card className="group h-full bg-secondary/50 border border-transparent hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="h-10 w-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="mt-4 font-semibold text-center text-foreground transition-colors duration-300 group-hover:text-primary">{skill.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
