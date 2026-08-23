import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  to,
  href,
  target,
  rel,
  onClick,
  className,
  children,
}: PropsWithChildren<ButtonProps>) {
  const classNames = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles["full-width"] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to && !disabled)
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {children}
      </Link>
    );

  if (href && !disabled)
    return (
      <a href={href} target={target} rel={rel} className={classNames} onClick={onClick}>
        {children}
      </a>
    );

  return (
    <button type="button" disabled={disabled} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
};
