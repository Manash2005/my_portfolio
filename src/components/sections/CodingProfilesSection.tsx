
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { LeetCodeIcon } from '../icons/LeetCodeIcon';
import { GeeksForGeeksIcon } from '../icons/GeeksForGeeksIcon';
import data from '@/lib/data.json';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const iconMap = {
  LeetCode: <LeetCodeIcon />,
  GeeksForGeeks: <GeeksForGeeksIcon />,
};

const profileData = data.codingProfiles;
const { codingProfiles: content } = data.pageContent;

const platformStyles = {
    LeetCode: {
        glow: 'hover:shadow-[0_0_20px_5px_#facc1550]',
        hoverBorder: 'group-hover:border-hover-leetcode',
        hoverText: 'group-hover:text-hover-leetcode',
        logoColorFilter: 'group-hover:filter-leetcode'
    },
    GeeksForGeeks: {
        glow: 'hover:shadow-glow-green',
        hoverBorder: 'group-hover:border-hover-gfg',
        hoverText: 'group-hover:text-hover-gfg',
        logoColorFilter: 'group-hover:filter-gfg'
    },
};

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
            const problemsSolvedStat = profile.stats.find(stat => stat.label === 'Problems Solved');
            const styles = platformStyles[profile.platform as keyof typeof platformStyles] || {};

            return (
            <motion.div key={index} style={style}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className={cn("h-full bg-card/50 border border-border transition-all duration-300 transform group-hover:-translate-y-2", styles.glow, styles.hoverBorder)}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn("flex-shrink-0 rounded-lg p-2 flex items-center justify-center w-[64px] h-[64px]", styles.logoColorFilter)}>
                        {iconMap[profile.platform as keyof typeof iconMap]}
                      </div>
                      <div>
                        <CardTitle className={cn("font-headline text-xl text-foreground transition-colors", styles.hoverText)}>{profile.platform}</CardTitle>
                        <p className="text-sm text-muted-foreground">@{profile.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </CardHeader>
                  <CardContent>
                    {problemsSolvedStat && (
                        <div className="text-center pt-4">
                           <p className="text-3xl font-bold text-foreground">{problemsSolvedStat.value}</p>
                           <p className="text-sm text-muted-foreground">{problemsSolvedStat.label}</p>
                         </div>
                    )}
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
