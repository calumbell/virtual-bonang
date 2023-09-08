import { Laras } from "@/types";
import { keyboardSvgData } from "../../public/graphics";

interface KeyboardIconProps {
  laras: Laras;
}

export default function KeyboardIcon({ laras }: KeyboardIconProps) {
  return (
    <button className="w-100 aspect-auto bg-red-800 rounded-full">
      <svg
        {...keyboardSvgData.attributes}
        className="fill-none m-4 stroke-white stroke-1 max-h-min"
      >
        {keyboardSvgData.paths.map((path, i) => (
          <path {...path} key={i} />
        ))}
      </svg>
    </button>
  );
}
