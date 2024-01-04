import { useState } from "react";
import { infoIconSvgData } from "../../public/graphics";
import { Icon } from ".";
import { useKeyPress } from "@/hooks";

export default function InformationModal() {
  const [isOpen, setIsOpen] = useState(false);
  useKeyPress("Escape", () => setIsOpen(false));
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full hidden xs:block aspect-square p-1 sm:p-2 bg-red-800 hover:bg-red-700 focus-visible:ring ring-black focus:bg-red-700 transition-color outline-none "
        aria-label="Open Application Instructions"
        role="button"
      >
        <Icon svgData={infoIconSvgData} className="fill-white m-1" />
      </button>

      {/* Modal Menu */}
      {isOpen && (
        <article
          className="absolute bg-white/90 m-10 z-10 w-96 p-4 border-black border"
          onClick={() => setIsOpen(false)}
          aria-label="Application Instructions"
          role="presentation"
        >
          <h2 className="text-center uppercase text-xl font-bold text-red-800">
            Instructions
          </h2>
          <section
            className="text-sm md:text-base outline-none focus-visible:ring ring-red-800"
            tabIndex={0}
          >
            <h3 className="font-bold uppercase">To Play</h3>
            <p className="mb-2">
              Click on the pots below or use your keyboard (Q to U for the top
              row, A to J for the bottom)
            </p>
            <h3 className="font-bold uppercase">What is the Bonang?</h3>
            <p className="mb-2">
              The Bonang is an instrument in the Javanese Gamelan. It is formed
              of two rows of small tuned gong chimes arranged horizontally and
              played with a pair of padded mallets.
            </p>

            <h3 className="font-bold uppercase">Notes</h3>
            <p className="mb-2">
              Notes in gamelan are numbered from 1 to 7. A dot below or above
              indicates the same note but at a high or lower register/octave.
            </p>
            <h3 className="font-bold uppercase">Laras</h3>
            <p className="mb-2">
              Laras can be loosely translated from Javanese as tuning system.
              There are two laras in Javanese gamelan; laras slendro, which has
              5 notes, and laras pelog, which has 7.
            </p>
          </section>
        </article>
      )}
    </>
  );
}
