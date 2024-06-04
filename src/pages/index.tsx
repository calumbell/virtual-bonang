import {
  Bonang,
  Footer,
  Seo,
  InformationModal,
  KeybindVisibilityToggle,
  LarasSelector,
  VolumeControl,
} from "@/components";
import { useAppState, useAudioContext } from "@/hooks";

export default function Home() {
  const state = useAppState();
  const { showKeybinds, setShowKeybinds, laras, setLaras, volume, setVolume } =
    state;
  useAudioContext();
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Seo />
      <header
        className="flex justify-between h-8 z-50 sm:h-12 wide:h-8 text-red-800"
        aria-label="Application Header & Settings"
      >
        {/* Left side of banner */}
        <div className="flex flex-row w-full">
          <h1 className="inline font-serif tracking-wide align-middle whitespace-nowrap text-black font-bold h-full sm:text-3xl wide:text-base wide:pt-1 sm:pt-2 p-1 px-4`">
            Virtual Bonang
          </h1>
          <InformationModal />
        </div>

        {/* Right side of banner */}
        <div className="flex-row hidden xs:flex gap-1">
          <KeybindVisibilityToggle state={{ showKeybinds, setShowKeybinds }} />
          <LarasSelector state={{ laras, setLaras }} />
          <VolumeControl />
        </div>
      </header>

      <main
        className="mb-auto mt-auto mx-5 hidden xs:block z-10 overflow-y-hidden"
        aria-label="Application"
      >
        <Bonang state={state} />
      </main>

      <main className="mb-auto p-2 mt-auto block  uppercase font-bold text-center xs:hidden">
        <p className="text-3xl font-sans">Please orientate your device wide</p>
        <p className="mt-2 tracking-tight">The bonang is a wide instrument</p>
      </main>
      <Footer />
    </div>
  );
}
