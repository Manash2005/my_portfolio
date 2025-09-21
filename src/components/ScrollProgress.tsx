"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // We need to use a state to avoid hydration mismatch, as useIsMobile can only run on the client.
    setShow(isMobile);
  }, [isMobile]);

  if (!show) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%] z-[100]"
      style={{ scaleX }}
    />
  );
}
