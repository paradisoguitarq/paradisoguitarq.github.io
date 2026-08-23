import Button from "../../components/actions/Button";
import Card from "../../components/display/Card";
import SectionHeading from "../../components/display/SectionHeading";
import ConcertRow from "../../components/media/ConcertRow";
import { nextConcert } from "../../lib/pgq/concerts";

import styles from "./Concerti.module.css";

export default function Concerti() {
  return (
    <section className={styles["list-section"]}>
      <div className={styles["list-container"]}>
        <SectionHeading eyebrow="In concerto" title="Le date del PGQ" />
        <Card className={styles["concert-card"]}>
          <ConcertRow {...nextConcert} />
        </Card>
        <p className={styles.note}>Le prossime date saranno pubblicate qui non appena confermate.</p>

        <div className={styles.cta}>
          <h3 className={styles["cta-title"]}>Organizza un concerto</h3>
          <p className={styles["cta-lead"]}>Per informazioni su date, programmi e disponibilità, scrivi al PGQ.</p>
          <Button size="lg" to="/contatti" className={styles["cta-button"]}>
            Contatti
          </Button>
        </div>
      </div>
    </section>
  );
}
