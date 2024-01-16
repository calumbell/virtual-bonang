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
      e.preventDefault();
      callback();
    };

    // Triggers a click when element is focused & spacebar is pressed
    const onFocusClick = (e: KeyboardEvent) => {
      if (document.activeElement !== ref.current) return;
      if (e.code !== "Space") return;
      onClick(e as KeyboardEvent);
    };

    // register event listener & cleanup
    element.addEventListener("mousedown", onClick);
    element.addEventListener("keydown", onFocusClick);
    return () => {
      element.removeEventListener("mousedown", onClick);
      element.removeEventListener("keydown", onFocusClick);
    };
  }, [ref, callback]);
}
