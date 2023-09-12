import { Pot } from "@/components";
import { bonangData } from "../../public/data";
import { AppState } from "@/types";

interface BonangProps {
  state: AppState;
}
export default function Bonang({ state }: BonangProps) {
  const { laras, showKeybinds } = state;
  return (
    <section className="flex flex-col align-middle">
      {bonangData[laras].map((row, i) => (
        <div className="grid grid-flow-col gap-2 my-2 justify-center" key={i}>
          {row.map((pot) => (
            <Pot {...pot} showKeybind={showKeybinds} key={pot.src} />
          ))}
        </div>
      ))}
    </section>
  );
}
