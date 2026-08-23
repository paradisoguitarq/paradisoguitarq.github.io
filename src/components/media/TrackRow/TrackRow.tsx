import styles from "./TrackRow.module.css";

export default function TrackRow({ index, title, note, duration }: TrackRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.index}>{String(index).padStart(2, "0")}</span>
      <span>
        <span className={styles.title}>{title}</span>
        {note && <span className={styles.note}>{note}</span>}
      </span>
      <span className={styles.duration}>{duration}</span>
    </div>
  );
}

export type TrackRowProps = {
  index: number;
  title: string;
  note?: string;
  duration: string;
};
