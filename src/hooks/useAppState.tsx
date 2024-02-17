import { useState } from "react";
import { Laras } from "@/types";

/* useAppState() is a container for app-wide state. Specific pieces of state
 * can destructured from object returned by this hook */

export default function useAppState() {
  const [laras, setLaras] = useState<Laras>("slendro" as Laras);
  const [showKeybinds, setShowKeybinds] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);

  return {
    laras,
    setLaras,
    showKeybinds,
    setShowKeybinds,
    volume,
    setVolume,
  };
}
