import { createContext, useContext, useState, type PropsWithChildren } from "react";

export function HeroScrollHintProvider({ children }: PropsWithChildren) {
  const [isDismissed, setIsDismissed] = useState(false);

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
