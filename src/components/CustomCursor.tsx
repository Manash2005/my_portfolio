"use client";

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer') {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorSize = isPointer ? 40 : 20;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary/20 backdrop-filter backdrop-blur-sm transition-all duration-200 ease-in-out`}
      style={{
        transform: `translate(${position.x - cursorSize / 2}px, ${position.y - cursorSize / 2}px)`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    />
  );
}
