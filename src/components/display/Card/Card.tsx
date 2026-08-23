import type { PropsWithChildren } from "react";

import styles from "./Card.module.css";

export default function Card({
  tone = "default",
  padding = "default",
  interactive = false,
  className,
  children,
}: PropsWithChildren<CardProps>) {
  const classNames = [
    styles.card,
    tone !== "default" ? styles[`tone-${tone}`] : undefined,
    padding === "none" ? styles["padding-none"] : undefined,
    interactive ? styles.interactive : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}

export type CardTone = "default" | "sunken" | "inverse";
export type CardPadding = "default" | "none";

export type CardProps = {
  tone?: CardTone;
  padding?: CardPadding;
  interactive?: boolean;
  className?: string;
};
