import { useState } from "react";
import { Laras } from "@/types";

export default function useAppState() {
  const [laras, setLaras] = useState<Laras>("slendro" as Laras);
  const [showKeybinds, setShowKeybinds] = useState<boolean>(false);
  return {
    laras,
    setLaras,
    showKeybinds,
    setShowKeybinds,
  };
}
