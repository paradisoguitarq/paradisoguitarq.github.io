import { useSearchParams } from "react-router-dom";

import Button from "../../components/actions/Button";
import Card from "../../components/display/Card";
import SectionHeading from "../../components/display/SectionHeading";
import ConcertRow from "../../components/media/ConcertRow";
import Tabs from "../../components/navigation/Tabs";
import { getConcertDateLabels, getPastConcertsByYear, getUpcomingConcerts } from "../../lib/pgq/concerts";
import type { Concert, ConcertYear } from "../../lib/pgq/concerts";

import styles from "./Concerti.module.css";

export default function Concerti() {
  const concerts = getUpcomingConcerts();
  const pastYears = getPastConcertsByYear();

  return (
    <section className={styles["list-section"]}>
      <div className={styles["list-container"]}>
        <SectionHeading eyebrow="In concerto" title="Le date del PGQ" />
        {concerts.length > 0 ? (
          <>
            <div className={styles["concert-list"]}>
              {concerts.map((concert) => {
                const dateLabels = getConcertDateLabels(concert);

                return (
                  <Card key={concertKey(concert)}>
                    <ConcertRow {...concert} {...dateLabels} />
                  </Card>
                );
              })}
            </div>
            <p className={styles.note}>Le prossime date saranno pubblicate qui non appena confermate.</p>
          </>
        ) : (
          <Card className={styles.empty}>
            <p className={styles["empty-title"]}>Nessun concerto in programma</p>
            <p className={styles["empty-lead"]}>Le prossime date saranno pubblicate qui non appena confermate.</p>
          </Card>
        )}

        {pastYears.length > 0 && <ConcertArchive years={pastYears} />}

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

function ConcertArchive({ years }: ConcertArchiveProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedYear = searchParams.get("anno");
  const activeYear = years.find(({ year }) => year === requestedYear) ?? years[0];
  const yearTabs = years.map(({ year }) => ({ id: year, label: year }));

  return (
    <div className={styles.archive}>
      <SectionHeading eyebrow="Archivio" title="Concerti passati" />
      <div className={styles["archive-tabs"]}>
        <Tabs items={yearTabs} value={activeYear.year} onChange={(year) => setSearchParams({ anno: year })} />
      </div>
      <ul className={styles["archive-list"]}>
        {activeYear.concerts.map((concert) => (
          <ArchiveRow key={concertKey(concert)} concert={concert} />
        ))}
      </ul>
    </div>
  );
}

// The active year tab already names the year, so each row shows only day and month.
function ArchiveRow({ concert }: ArchiveRowProps) {
  const { date, month } = getConcertDateLabels(concert);

  return (
    <li className={styles["archive-row"]}>
      <time dateTime={concert.date} className={styles["archive-date"]}>
        <span className={styles["archive-day"]}>{date}</span>
        <span className={styles["archive-month"]}>{month}</span>
      </time>
      <div>
        <div className={styles["archive-title"]}>{concert.title}</div>
        <div className={styles["archive-venue"]}>{concert.venue}</div>
      </div>
    </li>
  );
}

function concertKey(concert: Concert): string {
  return `${concert.date}-${concert.title}`;
}

type ConcertArchiveProps = {
  years: ConcertYear[];
};

type ArchiveRowProps = {
  concert: Concert;
};
