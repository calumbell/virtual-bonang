import { Bonang } from "@/components";
export default function Home() {
  return (
    <div className="flex flex-col jus w-screen h-screen">
      <header className="flex justify-between h-12 absolute">
        <h1 className="text-lg  bg-red-800 px-4 py-1 text-white">Bonang</h1>
      </header>

      <main className="mb-auto mt-auto mx-5 hidden landscape:block xs:block">
        <Bonang />
      </main>

      <main className="mb-auto mt-auto block text-center text-3xl xs:hidden landscape:hidden">
        Please orientate your device wide
      </main>

      <footer className="text-center bg-red-800 text-white">
        <span>
          Made with love by <a href="https://github.com/calumbell">Calum</a>
        </span>
      </footer>
    </div>
  );
}
