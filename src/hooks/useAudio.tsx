import { useState } from "react";
import { Howl } from "howler";

export default function useAudio(src: string) {
  const [audio, setAudio] = useState(new Howl({ src }));

  if (!audio) return () => {};

  return () => {
    setTimeout(() => {
      audio.play();
    }, 10);
  };
}
