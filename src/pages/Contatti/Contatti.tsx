import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

import Button from "../../components/actions/Button";
import SectionHeading from "../../components/display/SectionHeading";
import { contactEmail, socialLinks } from "../../lib/pgq/social";

import styles from "./Contatti.module.css";

export default function Contatti() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <SectionHeading title="Contatti" lead="Per date, booking e collaborazioni, scrivi al PGQ." />
          <div className={styles.location}>
            <FaMapMarkerAlt size={20} />
            <span className={styles["location-text"]}>Puglia, Italia</span>
          </div>
          <Button size="lg" href={`mailto:${contactEmail}`} className={styles["email-button"]}>
            {contactEmail}
          </Button>
        </div>
        <div>
          <div className={styles["social-heading"]}>Seguici</div>
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
              <Icon size={20} className={styles["social-icon"]} />
              <span className={styles["social-label"]}>{label}</span>
              <FaExternalLinkAlt size={16} className={styles["social-external-icon"]} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
