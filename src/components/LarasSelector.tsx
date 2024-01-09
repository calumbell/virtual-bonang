import { ChangeEventHandler } from "react";
import { Laras } from "@/types";

interface LarasSelectorProps {
  state: {
    laras?: Laras;
    setLaras: Function;
  };
}

export default function LarasSelector({ state }: LarasSelectorProps) {
  const { setLaras } = state;

  // Callback: on modal change update the state
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const validLaras = ["slendro", "pelogBem", "pelogBarang"];
    if (!validLaras.includes(e.target.value)) return;
    setLaras(e.target.value);
    e.target.blur(); // this stops the 's' or 'p' keys changing the laras
  };

  return (
    <div
      className="flex flex-col bg-red-800"
      aria-label="Laras (Tuning) Selector"
    >
      {/* Label */}
      <div className="p-0 m-0 flex items-center">
        <label
          aria-hidden="true"
          className="bg-white max-w-min uppercase whitespace-nowrap font-bold text-red-800 px-1 text-2xs sm:text-xs border-red-800"
        >
          Laras / Tuning
        </label>
        <div className="bg-white w-full h-[2px] mb-1" />
      </div>

      {/* Drop Down Menu */}
      <select
        onChange={onLarasChange}
        className="select rounded-none transition-color pr-6 sm:px-4 text-xs sm:w-64 sm:text-lg h-full hover:bg-red-700 text-white bg-red-800 tracking-wider outline-none focus-visible:bg-red-700 focus-visible:ring ring-black"
        aria-label="Laras (Tuning) Dropdown"
        id="laras-selector"
      >
        <option value="slendro">Laras Slendro</option>
        <option value="pelogBem">Laras Pelog (Bem)</option>
        <option value="pelogBarang">Laras Pelog (Barang)</option>
      </select>
    </div>
  );
}
