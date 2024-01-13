import { useState } from "react";
import { Laras } from "@/types";
import { useAudioContext } from "./";

/* useAppState() is a container for app-wide state. Specific pieces of state
 * can destructured from object returned by this hook */

export default function useAppState() {
  const [laras, setLaras] = useState<Laras>("slendro" as Laras);
  const [showKeybinds, setShowKeybinds] = useState<boolean>(false);
  const audioContext = useAudioContext();
  return {
    laras,
    setLaras,
    showKeybinds,
    setShowKeybinds,
    audioContext,
  };
}
