interface useAnimationProps {
  animationClass: string;
  target: HTMLElement | null;
  duration?: number;
}

/* useAnimation() handles the addition and removal of animation classes from
 * elements passed to the hook */

export default function useAnimation({
  animationClass,
  target,
  duration = 125,
}: useAnimationProps) {
  // return an empty function if an element reference is omitted
  if (!target) return () => {};

  // trigger an animation by adding an animation class to element
  return () => {
    target.style.animationDuration = duration.toString();
    target.classList.remove(animationClass);
    target.classList.add(animationClass);
    setTimeout(() => target.classList.remove(animationClass), duration);
  };
}
