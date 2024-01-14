import { MutableRefObject, useEffect } from "react";

export default function useTouch(
  ref: MutableRefObject<null | EventTarget>,
  callback: Function
) {
  useEffect(() => {
    if (!ref.current) return;

    const onTouch = (e: Event) => {
      e.preventDefault(); // prevents also raising a mousedown event
      callback();
      return () => ref.current?.removeEventListener("touchstart", onTouch);
    };

    ref.current.addEventListener("touchstart", onTouch);
  }, [ref, callback]);
}
