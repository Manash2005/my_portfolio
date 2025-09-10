"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { LeetCodeIcon } from '../icons/LeetCodeIcon';
import { GeeksForGeeksIcon } from '../icons/GeeksForGeeksIcon';

const profileData = [
  {
    platform: 'LeetCode',
    username: 'manash_swain',
    url: 'https://leetcode.com/u/manash_swain/',
    icon: <LeetCodeIcon />,
    stats: [
      { label: 'Problems Solved', value: '150+' },
      { label: 'Contests', value: '10+' },
    ],
  },
  {
    platform: 'GeeksForGeeks',
    username: 'swainm099',
    url: 'https://www.geeksforgeeks.org/user/swainm099/',
    icon: <GeeksForGeeksIcon />,
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Coding Score', value: '500+' },
    ],
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function CodingProfilesSection() {
  return (
    <motion.section
      id="coding-profiles"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Coding Profiles</h2>
        <p className="mt-2 text-lg text-muted-foreground">My activity on competitive programming platforms.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {profileData.map((profile, index) => (
          <motion.div key={index} variants={itemVariants}>
            <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
              <Card className="h-full bg-card/50 border border-border group-hover:border-accent/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-glow-accent">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-lg p-2 flex items-center justify-center w-[64px] h-[64px]">
                      {profile.icon}
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
        ))}
      </motion.div>
    </motion.section>
  );
}
