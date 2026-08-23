import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useMenuState } from "./menu-state";
import styles from "./NavBar.module.css";
import { useScrollState } from "./scroll-state";

const MENU_ID = "navbar-menu";

const getLinkClassName: NavLinkProps["className"] = ({ isActive }) => [styles.link, isActive ? styles["link-active"] : undefined].filter(Boolean).join(" ");

export default function NavBar({ logoSrc, items }: NavBarProps) {
  const { scrolled, hidden } = useScrollState(300);
  const { open, close, toggle, barRef } = useMenuState();
  // Retracting the bar while its menu hangs off it would take the menu with it.
  const headerClassNames = [styles.header, scrolled ? styles.scrolled : undefined, hidden && !open ? styles.hidden : undefined].filter(Boolean).join(" ");
  const navClassNames = [styles.nav, open ? styles["nav-open"] : undefined].filter(Boolean).join(" ");

  return (
    <header ref={barRef} className={headerClassNames}>
      <div className={styles.content}>
        <NavLink to="/" end className={styles["logo-link"]}>
          <img src={logoSrc} alt="PGQ — Paradiso Guitar Quartet & Bass" className={styles.logo} />
        </NavLink>
        <nav id={MENU_ID} className={navClassNames}>
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={getLinkClassName} onClick={close}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className={styles["menu-button"]}
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          aria-controls={MENU_ID}
          onClick={toggle}
        >
          {open ? <FaTimes size={20} aria-hidden /> : <FaBars size={20} aria-hidden />}
        </button>
      </div>
    </header>
  );
}

export type NavBarItem = {
  to: string;
  label: string;
};

export type NavBarProps = {
  logoSrc: string;
  items: NavBarItem[];
};
