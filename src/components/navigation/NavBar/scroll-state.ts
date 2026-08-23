import { useEffect, useState } from "react";

export function useScrolled(threshold: number): boolean {
  const [scrolled, setScrolled] = useState(window.scrollY > threshold);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
