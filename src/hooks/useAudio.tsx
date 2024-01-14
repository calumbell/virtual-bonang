import { useState } from "react";
import { Howl } from "howler";

export default function useAudio(src: string) {
  const [audio, setAudio] = useState(new Howl({ src }));

  if (!audio) return () => {};

  return () => {
    // Wait ~10 ms for audio to fade out before restarting
    setTimeout(() => {
      // audio.volume(1);
      audio.play();
    }, 10);
  };
}
