import { Bonang, KeyboardButton, LarasSelector } from "@/components";
import { Laras } from "@/types";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col jus w-screen h-screen">
      <header className="flex justify-between h-12">
        <h1 className="text-3xl bg-red-800 px-4 py-1 text-white">Bonang</h1>
      </header>

      <main className="mb-auto mt-auto mx-5">
        <Bonang />
      </main>

      <footer className="text-center bg-red-800 text-white">
        <span>
          Made with love by <a href="https://github.com/calumbell">Calum</a>
        </span>
      </footer>
    </div>
  );
}
