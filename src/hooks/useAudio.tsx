import { Howl } from "howler";

export default function useAudio(src: string) {
  // generate audio node, rtn callback to play audio
  const audio = new Howl({ src });
  if (!audio) return () => {};
  return () => audio.play();
}
