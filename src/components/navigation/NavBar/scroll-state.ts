import { useEffect, useRef, useState } from "react";

export function useScrollState(threshold: number): ScrollState {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      setScrolled(scrollY > threshold);
      if (scrollY <= threshold)
        setHidden(false);
      else if (scrollY > previousScrollY)
        setHidden(true);
      else if (scrollY < previousScrollY)
        setHidden(false);

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, hidden };
}

type ScrollState = {
  scrolled: boolean;
  hidden: boolean;
};
