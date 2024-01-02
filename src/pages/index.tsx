import {
  Bonang,
  Footer,
  Seo,
  InformationModal,
  KeybindVisibilityToggle,
  LarasSelector,
} from "@/components";
import { useAppState } from "@/hooks";

export default function Home() {
  const state = useAppState();
  const { showKeybinds, setShowKeybinds, laras, setLaras } = state;

  return (
    <div className="flex flex-col w-screen h-screen">
      <Seo />
      <header
        className="flex justify-between h-8 sm:h-12"
        aria-label="Application Header & Settings"
      >
        {/* Left side of banner */}
        <div className="flex flex-row">
          <h1 className="inline align-middle whitespace-nowrap uppercase font-thing h-full tracking-wider sm:text-xl sm:pt-2 p-1 bg-red-800 px-4 text-white">
            Virtual Bonang
          </h1>
          <InformationModal />
        </div>

        {/* Right side of banner */}
        <div className="flex flex-row">
          <KeybindVisibilityToggle state={{ showKeybinds, setShowKeybinds }} />
          <LarasSelector state={{ laras, setLaras }} />
        </div>
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
