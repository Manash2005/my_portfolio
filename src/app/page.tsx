
import Link from 'next/link';
import { ArrowRight, Code, Film } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">Manash Swain</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">Select a portfolio to continue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
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
  );
}
