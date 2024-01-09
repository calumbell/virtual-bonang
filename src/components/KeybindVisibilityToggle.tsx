import { keyboardSvgData } from "../../public/graphics";
import { Icon } from "@/components";

interface KeybindVisibilityToggleProps {
  state: {
    showKeybinds: boolean;
    setShowKeybinds: Function;
  };
}

export default function KeybindVisibilityToggle({
  state,
}: KeybindVisibilityToggleProps) {
  const { showKeybinds, setShowKeybinds } = state;

  return (
    <button
      className={`h-full w-8 sm:w-12 transition-colors mr-1 focus-visible:bg-red-700  hover:bg-red-700 outline-none focus-visible:ring ring-black ${
        showKeybinds ? "bg-gray-700" : "bg-red-800"
      }`}
      onClick={() => setShowKeybinds(!showKeybinds)}
      aria-label="Toggle Keybind Visibility"
      aria-pressed={showKeybinds ? "true" : "false"}
      tabIndex={0}
    >
      {/* Keyboard Icon */}
      <Icon
        svgData={keyboardSvgData}
        className="fill-none m-1 stroke-white stroke-1 not-sr-only"
      />
    </button>
  );
}
