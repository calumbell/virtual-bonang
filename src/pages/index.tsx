import { Pot } from "@/components";
import { bonangData } from "../../public/data";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  type Laras = "slendro" | "pelog";
  const [laras, setLaras] = useState<Laras>("slendro");
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const laras = e.target.value;
    if (["slendro", "pelog"].includes(laras)) setLaras(laras);
  };
  return (
    <main>
      <h1 className="text-3xl">Bonang</h1>
      <section>
        {bonangData[laras].map((row, i) => (
          <div className="flex gap-2 my-2" key={i}>
            {row.map((pot, i) => (
              <Pot {...pot} key={i} />
            ))}
          </div>
        ))}
      </section>

      <select onChange={onLarasChange}>
        <option value="slendro">Slendro</option>
        <option value="pelog">Pelog</option>
      </select>
    </main>
  );
}
