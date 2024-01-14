import { MutableRefObject, useEffect } from "react";

// useClick() runs a callback function when an element is clicked
export default function useClick(
  ref: MutableRefObject<null | EventTarget>,
  callback: Function
) {
  useEffect(() => {
    if (!ref.current) return;

    const onClick = (e: Event) => {
      callback();
      return () => ref.current?.removeEventListener("mousedown", onClick);
    };

    ref.current.addEventListener("mousedown", onClick);
  }, [ref, callback]);
}
