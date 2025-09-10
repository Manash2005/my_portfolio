"use client";

import { useCallback, useMemo } from 'react';

// A tiny, clean Base64-encoded WAV file for a click sound.
const clickSoundData = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
// A slightly different sound for hover.
const hoverSoundData = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQwAAADpA+gC6wP0A+sD9ALr';

// Cache Audio objects for performance
let clickAudio: HTMLAudioElement | null = null;
let hoverAudio: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
  clickAudio = new Audio(clickSoundData);
  hoverAudio = new Audio(hoverSoundData);
  
  // Set a lower volume to be less intrusive
  clickAudio.volume = 0.3;
  hoverAudio.volume = 0.2;
}


export function useSound() {
  const playSound = useCallback((audio: HTMLAudioElement | null) => {
    if (audio) {
      // Rewind to the start and play
      audio.currentTime = 0;
      audio.play().catch(e => console.error("Error playing sound:", e));
    }
  }, []);

  const playHover = useCallback(() => {
    playSound(hoverAudio);
  }, [playSound]);

  const playClick = useCallback(() => {
    playSound(clickAudio);
  }, [playSound]);

  return { playHover, playClick };
}
