import { MutableRefObject, useEffect } from "react";

// useClick() runs a callback function when an element is clicked
export default function useClick(
  ref: MutableRefObject<null | EventTarget>,
  callback: Function
) {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const onClick = (e: Event) => {
      e.preventDefault();
      callback();
    };

    // register event listener & cleanup

    element.addEventListener("mousedown", onClick);
    return () => {
      element.removeEventListener("mousedown", onClick);
    };
  }, [ref, callback]);
}
