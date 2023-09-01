import { useEffect } from "react";

export default function useKeyPress(key: string, action: Function) {
  useEffect(() => {
    let keyIsDown = false;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === key && !keyIsDown) {
        keyIsDown = true;
        action();
      }
    }

    function onKeyUp(e: KeyboardEvent) {
      keyIsDown = false;
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [key, action]);
}
