import { KeyboardButton, LarasSelector, Pot } from "@/components";
import { Laras } from "@/types";
import { bonangData } from "../../public/data";
import { useState } from "react";

export default function Bonang() {
  const [showKeybinds, setShowKeybinds] = useState<boolean>(false);
  const [laras, setLaras] = useState<Laras>("slendro");
  return (
    <section className="flex flex-col align-middle">
      {bonangData[laras].map((row, i) => (
        <div className="flex gap-2 my-2 justify-center" key={i}>
          {row.map((pot) => (
            <Pot {...pot} showKeybind={showKeybinds} key={pot.src} />
          ))}
        </div>
      ))}
      {/* UI Ribbon */}
      <ul className="flex h-12 mt-5 justify-center ml-auto">
        {[
          <KeyboardButton state={{ showKeybinds, setShowKeybinds }} key="1" />,
          <LarasSelector state={{ setLaras }} key="2" />,
        ].map((component, i) => (
          <li className="h-12" key={i}>
            {component}
          </li>
        ))}
      </ul>
    </section>
  );
}
