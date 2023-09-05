import { useEffect, useState, useRef } from "react";
import { useKeyPress } from "@/hooks";
import bonangSVG from "../../public/graphics/bonang.json";
interface PotProps {
  note: number;
  src: string;
  keybind: string;
}

export default function Pot({ note, src, keybind }: PotProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(
    !typeof Audio ? new Audio(src) : undefined
  );
  // reload audio when the source changes
  useEffect(() => setAudio(new Audio(src)), [src]);
  // register startSound() method on key press
  useKeyPress(keybind, () => startSound());
  const potElement = useRef<SVGSVGElement>(null);

  return (
    <button
      className="max-w-min flex relative px-2 py-1 aspect-square rounded-full bg-red-50 flex-col justify-center"
      onClick={startSound}
    >
      <svg {...bonangSVG.attributes} className="w-32" ref={potElement}>
        <path {...bonangSVG.path} className=" transition-all" />
      </svg>
      <p className="absolute font-kepatihan text-white rounded-full bg-red-800 aspect-square h-8 w-8 m-0 bottom-0">
        {note}
      </p>
    </button>
  );

  function startSound() {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    potElement.current?.classList.remove("animate-ping");
    potElement.current?.classList.add("animate-ping");
    setTimeout(() => potElement.current?.classList.remove("animate-ping"), 75);
  }
}
