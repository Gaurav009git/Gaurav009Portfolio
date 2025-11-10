import { useCallback, useRef, useEffect } from 'react';

const useSound = () => {
  const audioContextRef = useRef(null);
  const isInteractedRef = useRef(false);

  // Stable function to get or create the audio context
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (error) {
        console.warn('Web Audio API not supported');
      }
    }
    return audioContextRef.current;
  }, []);

  // Initialize audio context on user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!isInteractedRef.current) {
        isInteractedRef.current = true;
        getAudioContext();
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', initAudio);
    document.addEventListener('mousedown', initAudio);
    document.addEventListener('touchstart', initAudio);
    document.addEventListener('keydown', initAudio);

    return () => {
      document.removeEventListener('click', initAudio);
      document.removeEventListener('mousedown', initAudio);
      document.removeEventListener('touchstart', initAudio);
      document.removeEventListener('keydown', initAudio);
    };
  }, [getAudioContext]);

  const createSound = useCallback((frequency, duration, volume = 0.1) => {
    try {
      const audioContext = getAudioContext();
      if (!audioContext) return;

      // Resume if suspended
      if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      const now = audioContext.currentTime;

      // Smooth fade in and out
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(volume, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      oscillator.start(now);
      oscillator.stop(now + duration);
    } catch (error) {
      // Silent fail for audio errors
    }
  }, [getAudioContext]);

  const playHover = useCallback(() => {
    if (!isInteractedRef.current) return;
    createSound(800, 0.1, 0.05);
  }, [createSound]);

  const playClick = useCallback(() => {
    if (!isInteractedRef.current) return;
    createSound(600, 0.15, 0.08);
  }, [createSound]);

  return { playHover, playClick };
};

export default useSound;