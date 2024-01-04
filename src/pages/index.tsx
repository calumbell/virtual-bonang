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
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Seo />
      <header
        className="flex justify-between h-8 sm:h-12 bg-red-800"
        aria-label="Application Header & Settings"
      >
        {/* Left side of banner */}
        <div className="flex flex-row w-full">
          <h1 className="inline align-middle whitespace-nowrap uppercase font-bold h-full sm:text-xl sm:pt-2 p-1 bg-red-800 px-4 text-white">
            Virtual Bonang
          </h1>
          <InformationModal />
        </div>

        {/* Right side of banner */}
        <div className="flex-row bg-red-800 hidden xs:flex">
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

      <main className="mb-auto p-2 mt-auto block  uppercase font-bold text-center  xs:hidden landscape:hidden">
        <p className="text-3xl font-sans">Please orientate your device wide</p>
        <p className="mt-2 tracking-tight">The bonang is a wide instrument</p>
      </main>
      <Footer />
    </div>
  );
}
