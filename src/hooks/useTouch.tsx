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
    };
    
    // register event listener & cleanup
    const element = ref.current;
    element.addEventListener("touchstart", onTouch);
    return () => element.removeEventListener("touchstart", onTouch);
  }, [ref, callback]);
}
