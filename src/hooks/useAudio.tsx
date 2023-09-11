import { useState, useEffect } from "react";

export default function useAudio(src: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  useEffect(() => setAudio(new Audio(src)), [src]);

  if (!audio) return () => {};

  return () => {
    // To reduce clicking on retriggers, first fade out previous sound
    const decrementVolume = () => (audio.volume /= 16);
    const interval = setInterval(decrementVolume, 1);

    // Wait ~10 ms for audio to fade out before restarting
    setTimeout(() => {
      clearInterval(interval);
      audio.volume = 1;
      audio.currentTime = 0;
      audio.play();
    }, 10);
  };
}
