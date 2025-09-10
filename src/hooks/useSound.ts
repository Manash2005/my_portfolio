"use client";

import { useCallback, useMemo } from 'react';

// Sounds are currently disabled to resolve an error.
// To re-enable, you can add a valid Base64 encoded sound here.
const clickSound = '';

export function useSound() {
  const audioContext = useMemo(() => {
    if (typeof window === 'undefined') return null;
    try {
      return new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.error("Web Audio API is not supported in this browser.");
      return null;
    }
  }, []);

  const playSound = useCallback((soundData: string) => {
    if (!audioContext || !soundData) return;
    
    if (document.activeElement && document.activeElement !== document.body) {
        const isInitialRender = performance.now() < 2000;
        if(isInitialRender) return;
    }
    
    try {
      const binaryString = atob(soundData);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
      }
      
      audioContext.decodeAudioData(bytes.buffer)
        .then(audioBuffer => {
          const source = audioContext.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(audioContext.destination);
          source.start();
        }).catch(e => console.error("Could not decode audio data:", e));
    } catch (e) {
      console.error("Failed to decode base64 string for sound:", e);
    }
  }, [audioContext]);

  const playHover = useCallback(() => {
    // Hover sound is disabled.
  }, []);

  const playClick = useCallback(() => {
    if (clickSound) {
      const soundData = clickSound.split(',')[1];
      if(soundData) {
        playSound(soundData);
      }
    }
  }, [playSound]);

  return { playHover, playClick };
}
