import { useKeyPress } from "@/hooks";
import { ReactNode } from "react";

interface PopupProps {
  ariaLabel: string;
  close: Function;
  children: ReactNode;
}

export default function Popup({ ariaLabel, close, children }: PopupProps) {
  useKeyPress("Escape", () => close());

  return (
    <div className="absolute flex items-center justify-center w-screen h-screen">
      {/* shade over the rest of page - closes menu when clicked */}
      <div
        className="absolute  w-full h-full bg-gray-800/30 z-10"
        onClick={() => close()}
      />
      {/* modal window */}
      <div
        className="bg-white relative w-screen px-4 py-3 sm:top-12 sm:w-3/5 wide:top-8 wide:w-screen z-20 border-red-800 border overflow-x-hidden"
        aria-label={ariaLabel}
        role="presentation"
      >
        <button
          className="hover:text-gray-800 hover:border-gray-800 font-light transition absolute right-0 top-0 aspect-square w-8 m-2 text-3xl rounded-full border-red-800"
          onClick={() => close()}
        >
          &times;
        </button>
        
        <article
          className="text-sm flex flex-col gap-2 wide:gap-1 md:text-base overflow-y-auto outline-none focus-visible:ring ring-red-800"
          tabIndex={0}
        >
          {children}
        </article>
      </div>
    </div>
  );
}
