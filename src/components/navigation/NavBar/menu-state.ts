import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { useLocation } from "react-router-dom";

/** Open/closed state for the compact menu the NavBar folds into on narrow viewports. */
export function useMenuState(): MenuState {
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const { key } = useLocation();

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((current) => !current), []);

  // Navigating — by tapping an entry, or with the browser's own back button —
  // must not leave the panel hanging over the page it just left.
  useEffect(() => {
    setOpen(false);
  }, [key]);

  useEffect(() => {
    if (!open)
      return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape")
        close();
    }

    function handlePointerDown(event: PointerEvent) {
      if (!barRef.current?.contains(event.target as Node))
        close();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, close]);

  return { open, close, toggle, barRef };
}

type MenuState = {
  open: boolean;
  close: () => void;
  toggle: () => void;
  /** Attach to the bar itself: a pointer down anywhere outside it dismisses the menu. */
  barRef: RefObject<HTMLElement | null>;
};
