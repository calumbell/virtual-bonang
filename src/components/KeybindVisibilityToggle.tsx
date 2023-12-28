import { keyboardSvgData } from "../../public/graphics";

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
      className={`h-full w-8 sm:w-12  transition-colors hover:bg-red-700 ${
        showKeybinds ? "bg-gray-700" : "bg-red-800"
      }`}
      onClick={() => setShowKeybinds(!showKeybinds)}
      aria-label="Toggle Keybind Visibility"
      aria-pressed={showKeybinds ? "true" : "false"}
    >
      {/* Keyboard Icon */}
      <svg
        {...keyboardSvgData.attributes}
        className="fill-none m-1 stroke-white stroke-1 not-sr-only"
        aria-hidden="true"
      >
        {keyboardSvgData.paths.map((path, i) => (
          <path {...path} key={i} />
        ))}
      </svg>

      {/* Alt text for screen-readers */}
      <label className="sr-only">Toggle Keybind Visibility</label>
    </button>
  );
}
