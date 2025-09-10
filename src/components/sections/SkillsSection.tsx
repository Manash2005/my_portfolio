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
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoDbIcon,
  FirebaseIcon,
  GitIcon,
  GitHubIcon,
  TailwindIcon,
  VsCodeIcon
} from '@/components/icons';

const skills = [
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Express.js', icon: <ExpressIcon /> },
  { name: 'MongoDB', icon: <MongoDbIcon /> },
  { name: 'Firebase', icon: <FirebaseIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'C', icon: <CIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'MySQL', icon: <MySqlIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'GitHub', icon: <GitHubIcon /> },
  { name: 'VS Code', icon: <VsCodeIcon /> },
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
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <Card className="group bg-secondary/50 border border-transparent hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-primary transition-transform duration-300 group-hover:scale-110 h-10 w-10 flex items-center justify-center">
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
