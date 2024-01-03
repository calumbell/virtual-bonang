import { MutableRefObject, useEffect } from "react";

// useClick() runs a callback function when an element is clicked
export default function useClick(
  ref: MutableRefObject<null | EventTarget>,
  callback: Function
) {
  useEffect(() => {
    if (!ref.current) return;

    const onClick = (e: Event) => {
      if (e.target !== ref.current) return;
      callback();
      return () => ref.current?.removeEventListener("click", onClick);
    };

    ref.current.addEventListener("click", onClick);
  }, [ref, callback]);
}
