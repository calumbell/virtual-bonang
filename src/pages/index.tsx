import { Pot } from "@/components";
import { bonangData } from "../../public/data";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  type Laras = "slendro" | "pelog";
  const [laras, setLaras] = useState<Laras>("slendro");
  const onLarasChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (!["slendro", "pelog"].includes(e.target.value)) return;
    setLaras(e.target.value as Laras);
  };
  return (
    <div className="flex flex-col jus w-screen h-screen">
      <header className="flex justify-between">
        <h1 className="text-3xl">Bonang</h1>
        <select onChange={onLarasChange}>
          <option value="slendro">Slendro</option>
          <option value="pelog">Pelog</option>
        </select>
      </header>
      <main className="mb-auto mt-auto mx-5">
        <section className="flex flex-col align-middle">
          {bonangData[laras].map((row, i) => (
            <div className="flex gap-2 my-2 justify-center" key={i}>
              {row.map((pot, i) => (
                <Pot {...pot} key={i} />
              ))}
            </div>
          ))}
        </section>
      </main>
      <footer className="text-center">
        <span>
          Made with love by <a href="https://github.com/calumbell">Calum</a>
        </span>
      </footer>
    </div>
  );
}
