import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Card from "../../components/display/Card";
import SectionHeading from "../../components/display/SectionHeading";
import { contactEmail, contactPhone, contactPhoneHref, socialLinks } from "../../lib/pgq/social";

import styles from "./Contatti.module.css";

export default function Contatti() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Contatti" title="Scrivi al PGQ" lead="Per date, booking e collaborazioni." />

        <div className={styles.location}>
          <FaMapMarkerAlt size={14} aria-hidden className={styles["location-icon"]} />
          <span>Santeramo in Colle, BA</span>
        </div>

        <div className={styles.methods}>
          <Card interactive className={styles.method}>
            <span className={styles["method-icon"]}>
              <FaEnvelope size={18} aria-hidden />
            </span>
            <span className={styles["method-body"]}>
              <span className={styles["method-label"]}>Email</span>
              <a href={`mailto:${contactEmail}`} className={styles["method-value"]}>
                {contactEmail}
              </a>
            </span>
          </Card>

          <Card interactive className={styles.method}>
            <span className={styles["method-icon"]}>
              <FaPhoneAlt size={18} aria-hidden />
            </span>
            <span className={styles["method-body"]}>
              <span className={styles["method-label"]}>Telefono</span>
              <a href={contactPhoneHref} className={styles["method-value"]}>
                {contactPhone}
              </a>
            </span>
          </Card>
        </div>

        <div className={styles.social}>
          <div className={styles["social-heading"]}>Seguici</div>
          <div className={styles["social-grid"]}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
                <Icon size={20} aria-hidden className={styles["social-icon"]} />
                <span className={styles["social-label"]}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
