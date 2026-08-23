import Button from "../../components/actions/Button";
import Card from "../../components/display/Card";
import SectionHeading from "../../components/display/SectionHeading";
import ConcertRow from "../../components/media/ConcertRow";
import { nextConcert } from "../../lib/pgq/concerts";
import { contactEmail } from "../../lib/pgq/social";

import styles from "./Concerti.module.css";

export default function Concerti() {
  return (
    <>
      <section className={styles["list-section"]}>
        <div className={styles["list-container"]}>
          <SectionHeading eyebrow="In concerto" title="Le date del PGQ" />
          <Card className={styles["concert-card"]}>
            <ConcertRow {...nextConcert} />
          </Card>
          <p className={styles.note}>Le prossime date saranno pubblicate qui non appena confermate.</p>
        </div>
      </section>

      <section className={styles["cta-section"]}>
        <div className={styles["cta-container"]}>
          <SectionHeading tone="inverse" align="center" title="Organizza un concerto" lead="Per informazioni su date, programmi e disponibilità, scrivi al PGQ." />
          <Button variant="inverse" size="lg" href={`mailto:${contactEmail}`} className={styles["cta-button"]}>
            Scrivi al PGQ
          </Button>
        </div>
      </section>
    </>
  );
}
