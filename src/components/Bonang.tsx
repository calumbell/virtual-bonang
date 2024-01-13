import { BonangPot } from "@/components";
import { bonangData } from "../../public/data";
import { AppState } from "@/types";

interface BonangProps {
  state: AppState;
}
export default function Bonang({ state }: BonangProps) {
  const { laras, showKeybinds, audioContext } = state;
  return (
    <section className="flex flex-col align-middle">
      {bonangData[laras].map((row, i) => (
        <div
          className="grid grid-flow-col gap-2 my-2 justify-center z-0"
          key={i}
        >
          {row.map((pot) => (
            <BonangPot
              {...pot}
              ctx={audioContext}
              showKeybind={showKeybinds}
              key={pot.src}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
