import { useEffect } from "react";

//  useKeyPress() runs a callback function when the user presses a specific key on their keyboard.

export default function useKeyPress(key: string, action: Function) {
  useEffect(() => {
    let keyIsDown = false;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== key.toLowerCase() || keyIsDown) return;
      keyIsDown = true;
      action();
    };
    window.addEventListener("keydown", onKeyDown);

    const onKeyUp = (e: KeyboardEvent) => {
      keyIsDown = false;
    };
    window.addEventListener("keyup", onKeyUp);

    // clean-up: remove event listeners on unmount
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [key, action]);
}
