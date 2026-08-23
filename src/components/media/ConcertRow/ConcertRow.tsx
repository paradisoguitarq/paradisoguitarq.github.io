import styles from "./ConcertRow.module.css";

export default function ConcertRow({ date, month, year, title, venue, city }: ConcertRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles["date-block"]}>
        <div className={styles.date}>{date}</div>
        <div className={styles.month}>{month}</div>
        {year && <div className={styles.year}>{year}</div>}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.venue}>
          {venue}
          {venue && city ? " · " : ""}
          {city}
        </div>
      </div>
    </div>
  );
}

export type ConcertRowProps = {
  date: string;
  month: string;
  year?: string;
  title: string;
  venue: string;
  city?: string;
};
