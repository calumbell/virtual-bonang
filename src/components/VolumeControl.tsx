import { Howler } from "howler";
import { useState } from "react";
import { useToggle } from "@/hooks";
import { speakerSvgData } from "../../public/graphics";
import { Icon } from "@/components";

export default function VolumeControl() {
  const [volume, setVolume] = useState<number>(1.0);
  const [isSliderVisible, setVisibility, toggleSlider] = useToggle(true);
  // amplitude perception is logarithmic, so we square the volume
  Howler.volume(volume * volume);
  return (
    <button
      aria-label="show volume slider"
      className="w-8 mt-1 mr-1 sm:mt-0 sm:w-12 relative flex justify-center align-middle hover:bg-red-700 focus-visible:ring ring-black focus:bg-red-700 transition-color outline-none"
      onClick={() => {
        toggleSlider();
      }}
    >
      <Icon svgData={speakerSvgData} className="h-full p-1 inline fill-white" />
      <label className="text-white hidden sm:block text-2xs transpar sm:text-xs absolute -bottom-1 mb-1">
        {(volume * 100).toFixed(0) + "%"}
      </label>
      {isSliderVisible && (
        <div className="flex absolute top-12 w-16">
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
