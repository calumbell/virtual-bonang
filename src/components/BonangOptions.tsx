import { AppState } from "@/types";
import { KeyboardButton, LarasSelector } from ".";

interface BonangOptionsProps {
  state: AppState;
}
export default function BonangOptions({ state }: BonangOptionsProps) {
  const { showKeybinds, setShowKeybinds, laras, setLaras } = state;
  return (
    <ul className="flex h-12 justify-center ml-auto z-100">
      {[
        <KeyboardButton state={{ showKeybinds, setShowKeybinds }} key="1" />,
        <LarasSelector state={{ laras, setLaras }} key="2" />,
      ].map((component, i) => (
        <li className="h-12" key={i}>
          {component}
        </li>
      ))}
    </ul>
  );
}
