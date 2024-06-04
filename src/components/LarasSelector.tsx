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
    <div className="flex flex-col w-min" aria-label="Laras (Tuning) Selector">
      {/* Drop Down Menu */}
      <select
        onChange={onLarasChange}
        className="font-bold text-center rounded-none bg-transparent hover:text-gray-800 transition-color pr-2 wide:pr-4 text-sm sm:text-lg wide:text-sm h-full outline-none focus-visible:text-gray-800 focus-visible:ring ring-black"
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
