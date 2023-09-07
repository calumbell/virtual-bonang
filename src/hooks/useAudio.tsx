import { useState, useEffect } from "react";

export default function useAudio(src: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  useEffect(() => setAudio(new Audio(src)), [src]);

  if (!audio) return () => {};

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
