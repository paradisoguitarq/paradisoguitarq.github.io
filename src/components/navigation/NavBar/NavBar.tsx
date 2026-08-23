import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

import styles from "./NavBar.module.css";
import { useScrolled } from "./scroll-state";

const getLinkClassName: NavLinkProps["className"] = ({ isActive }) => [styles.link, isActive ? styles["link-active"] : undefined].filter(Boolean).join(" ");

export default function NavBar({ logoSrc, items }: NavBarProps) {
  const scrolled = useScrolled(20);
  const headerClassNames = [styles.header, scrolled ? styles.scrolled : undefined].filter(Boolean).join(" ");

  return (
    <header className={headerClassNames}>
      <div className={styles.content}>
        <NavLink to="/" end className={styles["logo-link"]}>
          <img src={logoSrc} alt="PGQ — Paradiso Guitar Quartet & Bass" className={styles.logo} />
        </NavLink>
        <nav className={styles.nav}>
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={getLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
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
