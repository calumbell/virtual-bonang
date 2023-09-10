import { keyboardSvgData } from "../../public/graphics";

interface KeyboardIconProps {
  state: {
    value: boolean;
    setter: Function;
  };
}

export default function KeyboardIcon({ state }: KeyboardIconProps) {
  console.log(state.value);
  return (
    <>
      <button
        className={`h-full aspect-square transition-all ${
          state.value ? "bg-gray-700 border-red-700 border-solid" : "bg-red-700"
        }`}
        onClick={() => state.setter(!state.value)}
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
    </>
  );
}
