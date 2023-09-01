import { useState } from "react";
import { useKeyPress } from "@/hooks";

interface PotProps {
  note: number;
  src: string;
  keybind: string;
}

export default function Pot({ note, src, keybind }: PotProps) {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(src));
  useKeyPress(keybind, () => startSound());

  return (
    <button
      className="bg-red-800 text-white px-4 py-2 aspect-square rounded-full"
      onClick={startSound}
    >
      {note}
    </button>
  );

  function startSound() {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
}
