import { AppState } from "@/types";
import { KeyboardButton, LarasSelector } from ".";

interface BonangOptionsProps {
  state: AppState;
}
export default function BonangOptions({ state }: BonangOptionsProps) {
  const { showKeybinds, setShowKeybinds, laras, setLaras } = state;
  return (
    <ul className="flex z-100">
      {[
        <KeyboardButton state={{ showKeybinds, setShowKeybinds }} key="1" />,
        <LarasSelector state={{ laras, setLaras }} key="2" />,
      ].map((component, i) => (
        <li key={i} className="inline-block">
          {component}
        </li>
      ))}
    </ul>
  );
}
