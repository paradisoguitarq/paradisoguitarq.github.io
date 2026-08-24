import { createContext, useContext, useState, type PropsWithChildren } from "react";

export const HERO_SCROLL_HINT_DISMISS_THRESHOLD = 200;

export function HeroScrollHintProvider({ children }: PropsWithChildren) {
  const [isDismissed, setIsDismissed] = useState(() => window.scrollY > HERO_SCROLL_HINT_DISMISS_THRESHOLD);

  return <HeroScrollHintContext.Provider value={{ isDismissed, dismiss: () => setIsDismissed(true) }}>{children}</HeroScrollHintContext.Provider>;
}

export function useHeroScrollHint(): HeroScrollHintContextValue {
  const context = useContext(HeroScrollHintContext);
  if (!context)
    throw new Error("useHeroScrollHint must be used within a HeroScrollHintProvider");

  return context;
}

const HeroScrollHintContext = createContext<HeroScrollHintContextValue | null>(null);

type HeroScrollHintContextValue = {
  isDismissed: boolean;
  dismiss: () => void;
};
