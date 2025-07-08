"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { name: 'E-commerce Platform', description: 'A full-featured e-commerce site with product listings, cart, and checkout.', tags: ['React', 'Node.js', 'MongoDB'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'online store' },
  { name: 'Social Media App', description: 'A platform for users to connect, post updates, and interact with friends.', tags: ['React', 'Firebase', 'Tailwind'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'social network' },
  { name: 'Task Management Tool', description: 'A productivity app to organize tasks, set deadlines, and track progress.', tags: ['JavaScript', 'Express.js'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'task manager' },
  { name: 'Portfolio Website', description: 'A personal portfolio to showcase my skills and projects to the world.', tags: ['Next.js', 'Framer Motion'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'developer portfolio' },
  { name: 'Weather Dashboard', description: 'A sleek dashboard to check real-time weather forecasts for any city.', tags: ['React', 'API'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'weather app' },
  { name: 'Blog Platform', description: 'A content management system for creating and publishing blog posts.', tags: ['Node.js', 'EJS'], liveUrl: '#', githubUrl: '#', imageUrl: 'https://placehold.co/600x400.png', hint: 'blogging platform' },
];

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
    <section id="projects" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight">Things I’ve Built</h2>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my favorite projects.</p>
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
            <Card className="group h-full flex flex-col bg-card overflow-hidden border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-primary">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
