import { Pot } from "@/components";
import { Laras } from "@/types";
import { bonangData } from "../../public/data";

interface BonangProps {
  laras: Laras;
}
export default function Bonang({ laras }: BonangProps) {
  return (
    <section className="flex flex-col align-middle">
      {bonangData[laras].map((row, i) => (
        <div className="flex gap-2 my-2 justify-center" key={i}>
          {row.map((pot) => (
            <Pot {...pot} key={pot.src} />
          ))}
        </div>
      ))}
    </section>
  );
}
