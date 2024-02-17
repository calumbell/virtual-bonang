import { useAppState } from "@/hooks";

interface VolumeControlProps {
  state: {
    volume: number;
    setVolume: Function;
  };
}

export default function VolumeControl({ state }: VolumeControlProps) {
  console.log("render");
  const { volume, setVolume } = state;
  return (
    <div>
      <label className="text-white">{(volume * 100).toFixed(0) + "%"}</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.valueAsNumber);
        }}
      />
    </div>
  );
}
