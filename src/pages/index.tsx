import { useState } from "react";
import { Pot } from "@/components";
import { bonangData } from "../../public/data";

export default function Home() {
  const [laras] = useState<"slendro" | "pelog">("slendro");
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
    </main>
  );
}
