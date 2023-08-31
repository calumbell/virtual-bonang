import { useState } from "react";

interface PotProps {
  note: number;
  src: string;
}

export default function Pot({ note, src }: PotProps) {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(src));

  return (
    <button
      className="bg-red-800 text-white px-4 py-2 aspect-square rounded-full"
      onClick={startSound}
    >
      {note}
    </button>
  );

  function startSound() {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }
}
