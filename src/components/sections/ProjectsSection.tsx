
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import data from '@/lib/data.json';

const projects = data.projects;
const { projects: content } = data.pageContent;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background-alt">
      <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{content.title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{content.subtitle}</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group h-full flex flex-col bg-card overflow-hidden border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-primary"
              >
                <div className="relative aspect-video">
                  <Image 
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.hint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> {content.buttons.github}
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> {content.buttons.liveDemo}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
