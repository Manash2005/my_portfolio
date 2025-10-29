
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Video, Clapperboard, MonitorPlay } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VideoEditorPage() {
  const videos = [
    `<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/XH92M1qWbX4?si=CpyutJgk9c0QejXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/-zKV2OFruWc?si=TUSULsbmCjFInD2j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  ];

  const skills = [
    { name: 'Adobe Premiere Pro', icon: <Video className="h-8 w-8 text-accent" /> },
    { name: 'Adobe After Effects', icon: <Clapperboard className="h-8 w-8 text-accent" /> },
    { name: 'DaVinci Resolve', icon: <MonitorPlay className="h-8 w-8 text-accent" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-background/50 backdrop-blur-sm">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
              poster="https://picsum.photos/seed/video-bg/1920/1080"
            >
               {/* Add a silent, looping background video source here later if you want */}
            </video>
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 px-4"
          >
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-white">Visual Storyteller</h1>
            <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">Crafting compelling narratives through the art of video editing.</p>
          </motion.div>
        </section>

        {/* Featured Video Section */}
        <section id="work" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
              <p className="mt-2 text-lg text-muted-foreground">A glimpse into my editing style.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {videos.map((videoIframe, index) => (
                    <CarouselItem key={index} className="md:basis-5/6 lg:basis-4/5">
                      <div className="p-1">
                        <div
                          className="relative w-full shadow-2xl shadow-accent/20 rounded-lg overflow-hidden border border-accent/50"
                          style={{
                            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                          }}
                        >
                          <div
                            className="absolute top-0 left-0 w-full h-full"
                            dangerouslySetInnerHTML={{ __html: videoIframe }}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about-video" className="py-20 md:py-32 bg-background-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">About My Craft</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  I transform raw footage into polished, engaging stories. With a keen eye for detail and a passion for narrative flow, I specialize in creating videos that captivate and resonate with audiences.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether it's a short film, a promotional video, or social media content, I bring a creative and technical approach to every project.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-6">Editing Toolkit</h3>
                <div className="flex flex-col gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                      {skill.icon}
                      <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
