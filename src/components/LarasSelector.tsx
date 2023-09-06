import { ChangeEventHandler } from "react";
import { Laras } from "@/types";

interface LarasSelectorProps {
  setter: Function;
}

export default function LarasSelector({ setter }: LarasSelectorProps) {
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (!["slendro", "pelog"].includes(e.target.value)) return;
    setter(e.target.value as Laras);
  };

  return (
    <select
      onChange={onLarasChange}
      className="px-4 py-3 bg-red-800 text-white  tracking-wider"
    >
      <option value="slendro">Slendro</option>
      <option value="pelog">Pelog</option>
    </select>
  );
}
