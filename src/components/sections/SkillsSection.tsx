
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import * as Icons from '@/components/icons';
import data from '@/lib/data.json';
import { FC } from 'react';

const skills = data.skills;

const iconComponents: Record<string, FC> = {
  HtmlIcon: Icons.HtmlIcon,
  CssIcon: Icons.CssIcon,
  BootstrapIcon: Icons.BootstrapIcon,
  JavaScriptIcon: Icons.JavaScriptIcon,
  JavaIcon: Icons.JavaIcon,
  CIcon: Icons.CIcon,
  CppIcon: Icons.CppIcon,
  PythonIcon: Icons.PythonIcon,
  MySqlIcon: Icons.MySqlIcon,
  CanvaIcon: Icons.CanvaIcon,
  ExcelIcon: Icons.ExcelIcon,
  GoogleSheetsIcon: Icons.GoogleSheetsIcon,
};

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
        {skills.map((skill) => {
          const IconComponent = iconComponents[skill.icon];
          return (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full bg-secondary/50 border border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow-primary">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="h-10 w-10 flex items-center justify-center">
                    {IconComponent ? <IconComponent /> : null}
                  </div>
                  <p className="mt-4 font-semibold text-center text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
