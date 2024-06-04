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
      className={`h-full text-lg transition-colors font-bold mr-1 focus-visible:text-gray-800 sm:text-lg wide:text-xs hover:text-gray-800 outline-none focus-visible:ring ring-black`}
      onClick={() => setShowKeybinds(!showKeybinds)}
      aria-label="Toggle Keybind Visibility"
      aria-pressed={showKeybinds ? "true" : "false"}
      tabIndex={0}
    >
      Keybinds
    </button>
  );
}
