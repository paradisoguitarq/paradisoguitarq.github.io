import type { ReactNode } from "react";

import styles from "./Footer.module.css";

export default function Footer({ logoSrc, note, social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logoSrc} alt="PGQ" className={styles["brand-logo"]} />
        <p className={styles.note}>{note}</p>
        <div className={styles.bottom}>
          <span className={styles.copyright}>© {new Date().getFullYear()} Paradiso Guitar Quartet & Bass · Musiche di Vito Nicola Paradiso</span>
          <div className={styles.social}>
            {social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className={styles["social-link"]}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type FooterProps = {
  logoSrc: string;
  note: string;
  social: FooterSocialLink[];
};
