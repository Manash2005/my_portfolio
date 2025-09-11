"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const mobileNavVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (isMobile: boolean) => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const NavLinks = ({ isMobile = false }) => (
    <motion.nav 
      className={`relative flex gap-2 ${isMobile ? 'flex-col items-center text-lg' : 'items-center'}`}
      variants={isMobile ? mobileNavVariants : undefined}
      initial={isMobile ? "hidden" : undefined}
      animate={isMobile ? "visible" : undefined}
      onMouseLeave={() => !isMobile && setHoveredLink(null)}
    >
      {navLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          onClick={() => handleLinkClick(isMobile)}
          onMouseEnter={() => !isMobile && setHoveredLink(link.href)}
          className="relative z-10 rounded-md px-3 py-2 tracking-wide text-foreground transition-colors hover:text-primary"
          variants={isMobile ? mobileLinkVariants : undefined}
        >
          {link.name}
          {!isMobile && hoveredLink === link.href && (
             <motion.div
              layoutId="hover-background"
              className="absolute inset-0 -z-10 rounded-md bg-secondary"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </motion.nav>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#home" 
          onClick={() => handleLinkClick(false)}
          className="font-logo text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
          Manash
        </a>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/80 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center">
                <a href="#home" onClick={() => handleLinkClick(true)} className="font-logo text-2xl font-semibold mb-8">Manash</a>
                <Separator className="mb-8" />
                <NavLinks isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
