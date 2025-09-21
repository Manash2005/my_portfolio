
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import data from '@/lib/data.json';
import { useRef } from 'react';

const educationData = data.education;
const { education: content } = data.pageContent;

export default function EducationSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const xLeft = useTransform(scrollYProgress, [0.3, 0.6], ['-100%', '0%']);
    const xRight = useTransform(scrollYProgress, [0.3, 0.6], ['100%', '0%']);
    const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]);

    // For the parallax effect on scroll
    const parallaxXLeft = useTransform(scrollYProgress, [0.6, 1], ['0%', '100%']);
    const parallaxXRight = useTransform(scrollYProgress, [0.6, 1], ['0%', '-100%']);

    // Combine entry and parallax transforms
    const combinedXLeft = useTransform(
        scrollYProgress,
        (v) => v < 0.6 ? xLeft.get() : parallaxXLeft.get()
    );
    const combinedXRight = useTransform(
        scrollYProgress,
        (v) => v < 0.6 ? xRight.get() : parallaxXRight.get()
    );


  return (
    <motion.section
      id="education"
      ref={targetRef}
      className="bg-background"
    >
      <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{content.title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{content.subtitle}</p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {educationData.map((edu, index) => {
            const style = {
                opacity,
                x: index === 0 ? combinedXLeft : combinedXRight,
            };

            return (
                <motion.div key={index} style={style}>
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    <Card className="h-full bg-card/50 border border-border group-hover:border-accent/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-glow-accent">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="flex-shrink-0 rounded-lg p-2 flex items-center justify-center w-[96px] h-[96px] bg-white">
                          <Image
                            src={edu.logo}
                            alt={`${edu.institution} Logo`}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="font-headline text-xl text-foreground">{edu.institution}</CardTitle>
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
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}

