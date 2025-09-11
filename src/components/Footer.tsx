
"use client";

import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import data from '@/lib/data.json';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks, name } = data;
  const { footer } = data.pageContent;

  return (
    <footer className="bg-card/50 border-t border-primary/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap] || Github;
              return (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </a>
                </Button>
              );
            })}
          </div>
          <div className="text-center text-muted-foreground">
            <p>{footer.thanksText.replace('{name}', name)}</p>
            <p>{footer.copyrightText.replace('{year}', currentYear.toString()).replace('{name}', name)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
