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
      className={`h-full aspect-square transition-all hover:bg-red-700 ${
        showKeybinds ? "bg-gray-700 border-red-800 border-solid" : "bg-red-800"
      }`}
      onClick={() => setShowKeybinds(!showKeybinds)}
    >
      <svg
        {...keyboardSvgData.attributes}
        className="fill-none m-2 stroke-white stroke-1 max-h-min"
      >
        {keyboardSvgData.paths.map((path, i) => (
          <path {...path} key={i} />
        ))}
      </svg>
    </button>
  );
}
