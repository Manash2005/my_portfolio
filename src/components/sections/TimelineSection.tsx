"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '@/components/ui/badge';
import { DoodleLine } from '../icons/DoodleLine';
import { Award, Code, GraduationCap, Mic } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Dec 2023',
    title: 'Started Learning C++',
    description: 'Began my journey into C++ and data structures.',
    icon: <Code className="h-6 w-6" />,
    category: 'Learning'
  },
  {
    date: 'Jan 2024',
    title: 'CodeInPWD Competition',
    description: 'Participated in my first coding competition and learned a lot.',
    icon: <Award className="h-6 w-6" />,
    category: 'Event'
  },
  {
    date: 'Feb 2024',
    title: 'Joined PW IOI',
    description: 'Enrolled in the School of Innovation to pursue software development.',
    icon: <GraduationCap className="h-6 w-6" />,
    category: 'Education'
  },
  {
    date: 'Mar 2024',
    title: 'Started Web Development',
    description: 'Dived into HTML, CSS, and JavaScript to build websites.',
    icon: <Code className="h-6 w-6" />,
    category: 'Learning'
  },
  {
    date: 'May 2024',
    title: 'Spoke at Freshers Event',
    description: 'Gave a talk to new students about my journey so far.',
    icon: <Mic className="h-6 w-6" />,
    category: 'Event'
  },
  {
    date: 'Jun 2024',
    title: 'Started Learning Java',
    description: 'Expanded my programming skills by learning Java.',
    icon: <Code className="h-6 w-6" />,
    category: 'Learning'
  },
  {
    date: 'Jul 2024',
    title: 'Semester Break Project',
    description: 'Built my first full-stack project during the break.',
    icon: <Code className="h-6 w-6" />,
    category: 'Project'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

export default function TimelineSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <motion.section
      id="timeline"
      className="py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">My Journey</h2>
          <p className="mt-2 text-lg text-muted-foreground">A timeline of my growth and experiences.</p>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container relative pb-16">
          {timelineEvents.map((event, index) => (
            <div className="embla__slide flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4" key={index}>
              <motion.div
                variants={itemVariants}
                className={`relative flex flex-col h-full ${index % 2 === 0 ? 'items-start' : 'items-start sm:mt-16'}`}
              >
                <div className={`transform ${index % 2 !== 0 ? 'sm:-translate-y-1/2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 text-primary rounded-full p-3 border-2 border-primary/50">
                      {event.icon}
                    </div>
                    <span className="font-semibold text-lg">{event.date}</span>
                  </div>

                  <div className="mt-4 pl-16">
                    <h3 className="font-headline font-bold text-xl text-foreground">{event.title}</h3>
                    <p className="mt-1 text-muted-foreground">{event.description}</p>
                    <Badge variant="secondary" className="mt-3">{event.category}</Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
          <DoodleLine />
        </div>
      </div>
    </motion.section>
  );
}
