
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function VideoEditorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">Video Editor Portfolio</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">This section is currently under construction.</p>
        <p className="text-muted-foreground">Come back soon to see my creative work!</p>
        
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
