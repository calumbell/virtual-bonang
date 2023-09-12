import { Bonang, BonangOptions, Footer } from "@/components";
import { useAppState } from "@/hooks";

export default function Home() {
  const state = useAppState();

  return (
    <div className="flex flex-col jus w-screen h-screen">
      <header className="flex justify-between h-8 sm:h-12">
        <h1 className="inline align-middle font-thing h-full sm:text-xl sm:pt-2 p-1 bg-red-800 px-4 text-white">
          Bonang
        </h1>
        <BonangOptions state={state} />
      </header>

      <main className="mb-auto mt-auto mx-5 hidden landscape:block xs:block">
        <Bonang state={state} />
      </main>

      <main className="mb-auto mt-auto block text-center text-3xl xs:hidden landscape:hidden">
        Please orientate your device wide
      </main>
      <Footer />
    </div>
  );
}
