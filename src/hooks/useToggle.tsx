import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export default function useToggle(
  initial?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>, () => void] {
  const [state, set] = useState<boolean>(initial ?? false);

  const toggle = useCallback(() => set(!state), [state]);

  return [state, set, toggle];
}
