import { useRef } from "react";
import { useAnimation, useAudio, useKeyPress } from "@/hooks";
import bonangSVG from "../../public/graphics/bonang.json";

interface PotProps {
  note: number;
  src: string;
  keybind: string;
}

export default function Pot({ note, src, keybind }: PotProps) {
  const startAudio = useAudio(src);

  // register startSound() method on key press
  useKeyPress(keybind, () => startSound());

  const potElement = useRef<null | SVGSVGElement>(null);

  const startAnimation = useAnimation({
    target: potElement.current as null | HTMLElement,
    animationClass: "animate-pulse",
  });

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
    startAudio();
    startAnimation();
  }
}
