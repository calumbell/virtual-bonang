import { useEffect, useState } from "react";
import { useKeyPress } from "@/hooks";
import bonangSVG from "../../public/graphics/bonang.json";
interface PotProps {
  note: number;
  src: string;
  keybind: string;
}

export default function Pot({ note, src, keybind }: PotProps) {
  const [audio, setAudio] = useState<HTMLAudioElement>(
    !typeof Audio && new Audio(src)
  );
  // reload audio when the source
  useEffect(() => setAudio(new Audio(src)), [src]);
  useKeyPress(keybind, () => startSound());
  return (
    <button
      className="bg-red-800 text-white max-w-min px-4 py-2 aspect-square rounded-full"
      onClick={startSound}
    >
      <svg {...bonangSVG.attributes} className="w-32">
        <path {...bonangSVG.path} />
      </svg>
      {note}
    </button>
  );

  function startSound() {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
}
