import { AppState } from "@/types";
import { KeybindVisibilityToggle, LarasSelector } from ".";

interface OptionsMenuProps {
  state: AppState;
}
export default function OptionsMenu({ state }: OptionsMenuProps) {
  const { showKeybinds, setShowKeybinds, laras, setLaras } = state;
  return (
    <div className="flex z-100" aria-label="Application Settings">
      <KeybindVisibilityToggle state={{ showKeybinds, setShowKeybinds }} />
      <LarasSelector state={{ laras, setLaras }} />
    </div>
  );
}
