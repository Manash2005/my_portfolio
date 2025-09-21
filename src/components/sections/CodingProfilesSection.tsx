
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { LeetCodeIcon } from '../icons/LeetCodeIcon';
import { GeeksForGeeksIcon } from '../icons/GeeksForGeeksIcon';
import data from '@/lib/data.json';
import { useRef } from 'react';

const iconMap = {
  LeetCode: <LeetCodeIcon />,
  GeeksForGeeks: <GeeksForGeeksIcon />,
};

const profileData = data.codingProfiles;
const { codingProfiles: content } = data.pageContent;

export default function CodingProfilesSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const xLeft = useTransform(scrollYProgress, [0.1, 0.4], ['-100%', '0%']);
    const xRight = useTransform(scrollYProgress, [0.1, 0.4], ['100%', '0%']);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <motion.section
      id="coding-profiles"
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
          {profileData.map((profile, index) => {
             const style = {
                opacity,
                x: index === 0 ? xLeft : xRight,
            };
            return (
            <motion.div key={index} style={style}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className="h-full bg-card/50 border border-border group-hover:border-accent/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-glow-accent">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 rounded-lg p-2 flex items-center justify-center w-[64px] h-[64px]">
                        {iconMap[profile.platform as keyof typeof iconMap]}
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{profile.platform}</CardTitle>
                        <p className="text-sm text-muted-foreground">@{profile.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-around pt-4">
                      {profile.stats.map((stat) => (
                         <div key={stat.label} className="text-center">
                           <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                           <p className="text-sm text-muted-foreground">{stat.label}</p>
                         </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          )})}
        </div>
      </div>
    </motion.section>
  );
}
