import { useState, useEffect } from "react";

interface useAudioProps {
  src: string;
  ctx?: AudioContext;
}

export default function useAudio({ src, ctx }: useAudioProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [source, setSource] = useState<
    MediaElementAudioSourceNode | undefined
  >();

  useEffect(() => setAudio(new Audio(src)), [src]);
  useEffect(() => {
    if (!ctx || !audio) return;
    const node = ctx.createMediaElementSource(audio);
    setSource(node);
    node.connect(ctx.destination);
    return () => node.disconnect(ctx.destination);
  }, [audio, ctx]);

  if (!audio || !ctx) return () => {};
  return () => {
    // To reduce clicking on retriggers, first fade out previous sound
    const decrementVolume = () => (audio.volume /= 1);
    const interval = setInterval(decrementVolume, 1);

    // Wait ~10 ms for audio to fade out before restarting
    setTimeout(() => {
      clearInterval(interval);
      audio.load();
      audio.volume = 1;
      audio.currentTime = 0;
      audio.play();
    }, 10);
  };
}
