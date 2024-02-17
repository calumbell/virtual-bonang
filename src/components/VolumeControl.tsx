import { Howler } from "howler";
import { useState } from "react";

export default function VolumeControl() {
  const [volume, setVolume] = useState<number>(1.0);
  // amplitude perception is logarithmic, so we square the volume
  Howler.volume(volume * volume);

  return (
    <div>
      <label className="text-white">{(volume * 100).toFixed(0) + "%"}</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(e.target.valueAsNumber)}
      />
    </div>
  );
}
