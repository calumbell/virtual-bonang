import { MutableRefObject, useEffect } from "react";

// useClick() runs a callback function when an element is clicked
export default function useClick(
  ref: MutableRefObject<null | EventTarget>,
  callback: Function
) {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    // Event handler for executing callback function
    const onClick = (e: Event | KeyboardEvent) => {
      e.preventDefault(); // prevents focusing on element
      callback();
    };
    element.addEventListener("mousedown", onClick);

    // Triggers a click when element is focused & spacebar is pressed
    const onFocusClick = (e: KeyboardEvent) => {
      if (document.activeElement !== element) return;
      if (e.code !== "Space") return;
      callback();
    };
    window.addEventListener("keydown", onFocusClick);

    // clean-up
    return () => {
      element.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onFocusClick);
    };
  }, [ref, callback]);
}
