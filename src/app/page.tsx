'use client';
import Link from 'next/link';
import { ArrowRight, Code, Film } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import data from '@/lib/data.json';

export default function Home() {
  const { heroHome: heroImage } = placeholderImages;
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary/10 via-background to-background animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[70vh]">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">Manash Swain</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">A creative student exploring the worlds of code and film.</p>
          </div>

          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full shadow-glow-gray">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                data-ai-hint={heroImage.hint}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center my-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight">My Portfolios</h2>
            <p className="mt-2 text-md text-muted-foreground">Select a path to see my work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
          <Link href="/developer" passHref>
            <Card className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-primary cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">Developer</CardTitle>
                  <Code className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="pt-2">View my journey and projects in software development and web technologies.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link href="/videoeditor" passHref>
            <Card className="group bg-card/50 border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-accent cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-accent transition-colors">Video Editor</CardTitle>
                  <Film className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <CardDescription className="pt-2">Explore my creative work, showreels, and editing skills in videography.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
