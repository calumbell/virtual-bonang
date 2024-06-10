import { useState } from "react";
import { infoIconSvgData } from "../../public/graphics";
import { Icon, ModalMenu } from ".";

export default function InformationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full w-8 group sm:w-10 wide:w-8 wide:h-8 hidden xs:block aspect-square p-1 sm:p-2 sm:mt-1 wide:p-1 focus-visible:ring ring-black transition-color outline-none "
        aria-label="Open Application Instructions"
        role="button"
      >
        <Icon
          svgData={infoIconSvgData}
          className={`fill-red-800 m-1 not-sr-only group-hover:fill-gray-800 ${
            isOpen && "fill-gray-800"
          }`}
        />
      </button>

      {/* Modal Menu */}
      {isOpen && (
        <ModalMenu
          ariaLabel="Application Instructions"
          close={() => setIsOpen(false)}
        >
          <h1 className="text-black justify-center font-serif text-xl">
            About the <span className="font-bold text-3xl">Virtual Bonang</span>
          </h1>
          {copy.map((paragraph, i) => (
            <section key={i} className="text-sm lg:text-base">
              <h2 className="font-bold text-red-800 text-lg wide:text-base font-serif">
                {paragraph.title}
              </h2>
              <p className="wide:text-sm text-black">{paragraph.content}</p>
            </section>
          ))}
        </ModalMenu>
      )}
    </>
  );
}

const copy = [
  {
    title: "Instructions",
    content: `Click on the pots or use your keyboard (Q to U for the top
      row, A to J for the bottom) to make music.`,
  },
  {
    title: "What is the Bonang?",
    content: `The Bonang is an instrument in the Javanese Gamelan. It is 
    formed of two rows of small bronze gong chimes arranged in a wooden rack
     and is played with a pair of padded mallets.`,
  },

  {
    title: "Notes",
    content: `Notes in gamelan are numbered from 1 to 7. A dot below or above
    indicates the same note but at a high or lower register/octave.`,
  },
  {
    title: "Laras",
    content: `Laras is a Javanese word for tuning. There are two laras used in
    gamelan music, SLENDRO & PELOG. A complete gamelan is usually a double set
     of instruments, one for each laras.`,
  },
];
