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
    // parent is transparent shade over the rest of the screen (click to close popup)
    <div
      className="absolute flex items-center justify-center w-screen h-screen sm:visible bg-gray-800/30 z-10"
      onClick={() => close()}
    >
      {/* modal window */}
      <div
        className="bg-white/95 w-screen px-4 py-3 sm:top-12 sm:w-3/5 wide:top-8 wide:w-screen z-20 border-red-800 border overflow-x-hidden"
        aria-label={ariaLabel}
        role="presentation"
      >
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
