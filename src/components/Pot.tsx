import { useRef } from "react";
import { useAnimation, useAudio, useKeyPress } from "@/hooks";
import { bonangSvgData } from "../../public/graphics";

interface PotProps {
  note: string;
  src: string;
  keybind: string;
  showKeybind?: boolean;
}

export default function Pot({
  note,
  src,
  keybind,
  showKeybind = false,
}: PotProps) {
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
      className="w-max flex relative px-2 py-1 aspect-square rounded-full bg-red-50 flex-col justify-center"
      onClick={startSound}
    >
      <svg {...bonangSvgData.attributes} className="w-full" ref={potElement}>
        {bonangSvgData.paths.map((path, i) => (
          <path {...path} className="transition-all" key={i} />
        ))}
      </svg>
      <p className="absolute bottom-0 font-kepatihan text-white aspect-square rounded-full h-8 w-8 bg-red-800">
        {note}
      </p>
    </button>
  );

  function startSound() {
    startAudio();
    startAnimation();
  }
}
