import {
  Bonang,
  OptionsMenu,
  Footer,
  Seo,
  InformationModal,
} from "@/components";
import { useAppState } from "@/hooks";

export default function Home() {
  const state = useAppState();

  return (
    <div className="flex flex-col jus w-screen h-screen">
      <Seo />
      <header
        className="flex justify-between h-8 sm:h-12"
        aria-label="Application Header & Settings"
      >
        <h1 className="inline align-middle font-thing h-full sm:text-xl sm:pt-2 p-1 bg-red-800 px-4 text-white">
          Virtual Bonang
        </h1>
        <InformationModal>
          TO PLAY: either click on the pots below or use your keyboard (Q to U
          for the top row, A to J for the bottom). THE BONANG is an instrument
          in the Javanese Gamelan. It is formed of two rows of small tuned gong
          chimes arranged horizontally and played with two padded mallets. There
          are two different LARAS, or tuning systems, in Javanese gamelan;
          slendro, which has 5 notes, and pelog, which has 7. The notes are
          numbered, a dot below or above indicates the same note but at a high
          or lower register.
        </InformationModal>
        <OptionsMenu state={state} />
      </header>

      <main
        className="mb-auto mt-auto mx-5 hidden landscape:block xs:block"
        aria-label="Application"
      >
        <Bonang state={state} />
      </main>

      <main className="mb-auto mt-auto block text-center text-3xl xs:hidden landscape:hidden">
        Please orientate your device wide
      </main>
      <Footer />
    </div>
  );
}
