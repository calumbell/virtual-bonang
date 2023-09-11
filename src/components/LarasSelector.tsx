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
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (!["slendro", "pelogBem", "pelogBarang"].includes(e.target.value))
      return;
    setLaras(e.target.value as Laras);
    // remove focus so pressing the 's' or 'p' key doesn't change laras
    e.target.blur();
  };

  return (
    <select
      onChange={onLarasChange}
      className="h-full px-4 py-3 hover:bg-red-700 bg-red-800 text-white  tracking-wider"
    >
      <option value="slendro">Slendro</option>
      <option value="pelogBem">Pelog (Bem)</option>
      <option value="pelogBarang">Pelog (Barang)</option>
    </select>
  );
}
