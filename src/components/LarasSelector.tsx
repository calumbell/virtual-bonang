import { ChangeEventHandler } from "react";
import { Laras } from "@/types";

interface LarasSelectorProps {
  setter: Function;
}

export default function LarasSelector({ setter }: LarasSelectorProps) {
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (!["slendro", "pelogBem", "pelogBarang"].includes(e.target.value))
      return;
    setter(e.target.value as Laras);
    // remove focus so pressing the 's' or 'p' key doesn't change laras
    e.target.blur();
  };

  return (
    <select
      onChange={onLarasChange}
      className="px-4 py-3 bg-red-800 text-white  tracking-wider"
    >
      <option value="slendro">Slendro</option>
      <option value="pelogBem">Pelog (Bem)</option>
      <option value="pelogBarang">Pelog (Barang)</option>
    </select>
  );
}
