import { Bonang, OptionsMenu, Footer, Seo } from "@/components";
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
