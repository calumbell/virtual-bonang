import { keyboardSvgData } from "../../public/graphics";

interface KeyboardIconProps {
  state: {
    showKeybinds: boolean;
    setShowKeybinds: Function;
  };
}

export default function KeyboardIcon({ state }: KeyboardIconProps) {
  const { showKeybinds, setShowKeybinds } = state;
  return (
    <button
      className={`h-full w-8 sm:w-12  transition-colors hover:bg-red-700 ${
        showKeybinds ? "bg-gray-700" : "bg-red-800"
      }`}
      onClick={() => setShowKeybinds(!showKeybinds)}
    >
      <svg
        {...keyboardSvgData.attributes}
        className="fill-none m-1 stroke-white stroke-1"
      >
        {keyboardSvgData.paths.map((path, i) => (
          <path {...path} key={i} />
        ))}
      </svg>
    </button>
  );
}
