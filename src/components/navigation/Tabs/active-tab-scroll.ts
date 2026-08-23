import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useActiveTabScroll(activeId: string): RefObject<HTMLDivElement | null> {
  const tablistRef = useRef<HTMLDivElement>(null);
  const scrolledOnce = useRef(false);

  useEffect(() => {
    const tablist = tablistRef.current;

    if (!tablist)
      return;

    const activeTab = tablist.querySelector('[aria-selected="true"]');

    if (!activeTab)
      return;

    const tablistRect = tablist.getBoundingClientRect();
    const activeRect = activeTab.getBoundingClientRect();
    // Centring the selection brings the tabs on either side of it into view;
    // clamping leaves the first and last ones sitting against their own edge.
    const activeStart = activeRect.left - tablistRect.left + tablist.scrollLeft;
    const centred = activeStart - (tablist.clientWidth - activeRect.width) / 2;
    const furthest = tablist.scrollWidth - tablist.clientWidth;
    const withinRange = Math.min(centred, furthest);
    const left = Math.max(0, withinRange);

    // A strip that fits needs no scrolling at all, and the opening frame of a
    // deep-linked tab should not look like the page moving on its own.
    tablist.scrollTo({ left, behavior: scrolledOnce.current ? "smooth" : "auto" });
    scrolledOnce.current = true;
  }, [activeId]);

  return tablistRef;
}
