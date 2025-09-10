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
  MySqlIcon 
} from '@/components/icons';

const skills = [
  { name: 'HTML', icon: <HtmlIcon className="h-10 w-10" /> },
  { name: 'CSS', icon: <CssIcon className="h-10 w-10" /> },
  { name: 'Bootstrap', icon: <BootstrapIcon className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <JavaScriptIcon className="h-10 w-10" /> },
  { name: 'Java', icon: <JavaScriptIcon className="h-10 w-10" /> },
  { name: 'C', icon: <CIcon className="h-10 w-10" /> },
  { name: 'C++', icon: <CppIcon className="h-10 w-10" /> },
  { name: 'Python', icon: <PythonIcon className="h-10 w-10" /> },
  { name: 'MySQL', icon: <MySqlIcon className="h-10 w-10" /> },
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
        className="grid grid-cols-2 sm:grid-cols-4 gap-8"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <Card className="group bg-secondary/50 border border-transparent hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-primary transition-transform duration-300 group-hover:scale-110">
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
