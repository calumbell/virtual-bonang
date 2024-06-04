import { Howler } from "howler";
import { useState } from "react";
import { useToggle } from "@/hooks";
import { speakerSvgData } from "../../public/graphics";
import { Icon } from "@/components";

export default function VolumeControl() {
  const [volume, setVolume] = useState<number>(1.0);
  const [isSliderVisible, setVisibility, toggleSlider] = useToggle(false);
  // amplitude perception is logarithmic, so we square the volume
  Howler.volume(volume * volume);
  return (
    <button
      aria-label="show volume slider"
      className="wide:hidden w-8 mt-1 mr-1 sm:mt-0 group sm:w-12 relative flex justify-center align-middle focus-visible:ring ring-black  transition-color outline-none"
      onClick={() => toggleSlider()}
    >
      <Icon
        svgData={speakerSvgData}
        className={`h-full sm:mt-1 p-1 inline fill-red-800 group-hover:fill-gray-800 group-focus-visible:fill-gray-800 ${
          isSliderVisible && "fill-gray-800"
        }`}
      />
      <label
        className={`text-black sm:block font-bold text-2xs sm:text-xs absolute -bottom-2 mt-1 mr-2 group-hover:visible ${
          isSliderVisible ? "visible" : "invisible"
        }`}
      >
        {(volume * 100).toFixed(0)}
      </label>
      {isSliderVisible && (
        <div className="flex absolute -bottom-6 w-12 right-0.5">
          <input
            aria-label="Volume Slider"
            className="w-full range bg-gray-200 accent-red-800"
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(e.target.valueAsNumber)}
          />
        </div>
      )}
    </button>
  );
}
