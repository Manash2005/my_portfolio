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
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            variants={itemVariants}
          >
            <Card className="h-full bg-secondary/50 border border-transparent">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="h-10 w-10 flex items-center justify-center">
                  {skill.icon}
                </div>
                <p className="mt-4 font-semibold text-center text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
