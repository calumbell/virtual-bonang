import { useState } from "react";
import { infoIconSvgData } from "../../public/graphics";
import { Icon } from ".";

interface InformationModalProps {
  content: string;
}

export default function InformationModal({
  content = "",
}: InformationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full aspect-square p-1 sm:p-2 bg-red-800 hover:bg-red-700 focus:bg-red-700 transition-color"
        aria-label="Open Application Instructions"
        role="button"
      >
        <Icon svgData={infoIconSvgData} className="fill-white m-1" />
      </button>

      {/* Modal Menu */}
      {isOpen && (
        <section
          className="absolute bg-white/90 m-10 z-10 w-96 p-4 border-black border"
          onClick={() => setIsOpen(false)}
          aria-label="Application Instructions"
          role="presentation"
        >
          <h2 className="text-center uppercase text-xl font-bold text-red-800">
            Instructions
          </h2>
          <p className="text-sm md:text-base" tabIndex={0}>
            {content}
          </p>
        </section>
      )}
    </>
  );
}
