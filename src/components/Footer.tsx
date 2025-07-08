import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-primary/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                </a>
              </Button>
            ))}
          </div>
          <div className="text-center text-muted-foreground">
            <p>Thanks for scrolling ✨ Built with 💙 by Manash</p>
            <p>&copy; {currentYear} Manash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
