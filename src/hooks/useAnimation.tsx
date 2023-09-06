interface useAnimationProps {
  animationClass: string;
  target: HTMLElement | null;
  duration?: number;
}

export default function useAnimation({
  animationClass,
  target,
  duration = 125,
}: useAnimationProps) {
  if (!target) return () => {};
  return () => {
    target.style.animationDuration = duration.toString();
    target.classList.remove(animationClass);
    target.classList.add(animationClass);
    setTimeout(() => target.classList.remove(animationClass), duration);
  };
}
