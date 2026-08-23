import type { ReactNode } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { contactEmail, contactPhone } from "../../../lib/pgq/social";

import styles from "./Footer.module.css";

export default function Footer({ logoSrc, social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.contact}>
            <span className={styles["contact-label"]}>Per concerti e collaborazioni</span>
            <span className={styles["contact-row"]}>
              <FaEnvelope size={14} aria-hidden className={styles["contact-icon"]} />
              <a href={`mailto:${contactEmail}`} className={styles["contact-link"]}>
                {contactEmail}
              </a>
            </span>
            <span className={styles["contact-row"]}>
              <FaPhoneAlt size={14} aria-hidden className={styles["contact-icon"]} />
              <a href={phoneHref} className={styles["contact-link"]}>
                {contactPhone}
              </a>
            </span>
          </div>
          <img src={logoSrc} alt="" className={styles["brand-logo"]} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.social}>
            {social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className={styles["social-link"]}>
                {item.icon}
              </a>
            ))}
          </div>
          <span className={styles.copyright}>© {new Date().getFullYear()} Paradiso Guitar Quartet & Bass</span>
        </div>
      </div>
    </footer>
  );
}

const phoneHref = `tel:${contactPhone.replace(/\s/g, "")}`;

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type FooterProps = {
  logoSrc: string;
  social: FooterSocialLink[];
};
