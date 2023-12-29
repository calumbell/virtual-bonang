import { useState } from "react";
import { infoIconSvgData } from "../../public/graphics";

interface InformationModalProps {
  children: string;
}

export default function InformationModal({
  children = "",
}: InformationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full aspect-square p-1 bg-red-800 hover:bg-red-700 focus:bg-red-700 transition-all"
        aria-label="Open Application Instructions"
        role="tooltip"
      >
        {/* SR only label */}
        <span className="sr-only bg-red-800 text-white">Show Instructions</span>

        {/* SVG Icon - hidden on screen readers */}
        <svg
          {...infoIconSvgData.attributes}
          className="fill-white m-1"
          aria-hidden="true"
        >
          {infoIconSvgData.paths.map((path, i) => (
            <path {...path} key={i} />
          ))}
        </svg>
      </button>

      {/* Modal Menu */}
      {isOpen && (
        <article
          className="absolute bg-white/75 m-10 z-10 w-96 p-4"
          onClick={() => setIsOpen(false)}
          role="presentation"
          tabIndex={0}
        >
          <h2 className="text-center uppercase text-xl font-bold text-red-800">
            Instructions
          </h2>
          <p>{children}</p>
        </article>
      )}
    </>
  );
}
