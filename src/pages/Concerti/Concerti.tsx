import Button from "../../components/actions/Button";
import Card from "../../components/display/Card";
import SectionHeading from "../../components/display/SectionHeading";
import ConcertRow from "../../components/media/ConcertRow";
import { getUpcomingConcerts } from "../../lib/pgq/concerts";

import styles from "./Concerti.module.css";

export default function Concerti() {
  const concerts = getUpcomingConcerts();

  return (
    <section className={styles["list-section"]}>
      <div className={styles["list-container"]}>
        <SectionHeading eyebrow="In concerto" title="Le date del PGQ" />
        {concerts.length > 0 ? (
          <>
            <div className={styles["concert-list"]}>
              {concerts.map((concert) => (
                <Card key={`${concert.date}-${concert.month}-${concert.title}`}>
                  <ConcertRow {...concert} />
                </Card>
              ))}
            </div>
            <p className={styles.note}>Le prossime date saranno pubblicate qui non appena confermate.</p>
          </>
        ) : (
          <Card className={styles.empty}>
            <p className={styles["empty-title"]}>Nessun concerto in programma</p>
            <p className={styles["empty-lead"]}>Le prossime date saranno pubblicate qui non appena confermate.</p>
          </Card>
        )}

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
