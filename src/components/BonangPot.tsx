import { useRef, useState } from "react";
import { Note } from "@/types";
import {
  useAnimation,
  useAudio,
  useClick,
  useKeyPress,
  useTouch,
} from "@/hooks";
import { kepatihanSymbolToText } from "@/utils";
import { bonangSvgData } from "../../public/graphics";
import Icon from "./Icon";

interface PotProps {
  note: Note;
  src: string;
  keybind: string;
  showKeybind?: boolean;
}

export default function BonangPot({
  note,
  src,
  keybind,
  showKeybind,
}: PotProps) {
  const startAudio = useAudio(src);

  // register startSound() method on key press
  useKeyPress(keybind, () => startSound());

  // set up animation
  const [potElement, setPotElement] = useState<SVGSVGElement | null>(null);
  const startAnimation = useAnimation({
    target: potElement as null | HTMLElement,
    animationClass: "animate-pulse",
  });

  // register startStart() method on touch & mousedown
  const btn = useRef(null);
  useTouch(btn, () => startSound());
  useClick(btn, () => startSound());

  return (
    <button
      className="w-full flex relative px-2 py-1 aspect-square rounded-full bg-red-50 flex-col justify-center outline-none focus-visible:ring ring-offset-4 ring-red-800"
      ref={btn}
    >
      <Icon
        svgData={bonangSvgData}
        className="w-full transition-all"
        refCallback={setPotElement}
      />
      {/* screenreader alt for Bonang SVG */}
      <span className="sr-only">
        {`Bonang Pot ${kepatihanSymbolToText(note)}`}
      </span>
      <p className="absolute bottom-0 flex gap-1 justify-between  text-white ">
        <span
          className="aspect-square rounded-full h-8 w-8 bg-red-800 ring-2 ring-red-500 font-kepatihan hidden sm:block"
          aria-hidden="true"
        >
          {note}
        </span>
        {showKeybind && (
          <span className="h-8 w-8 rounded-full bg-gray-500 pt-1">
            {keybind}
          </span>
        )}
      </p>
    </button>
  );

  function startSound() {
    startAudio();
    startAnimation();
  }
}
