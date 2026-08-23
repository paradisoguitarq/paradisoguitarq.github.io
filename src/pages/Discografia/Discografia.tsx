import Button from "../../components/actions/Button";
import SectionHeading from "../../components/display/SectionHeading";
import AlbumCover from "../../components/media/AlbumCover";
import TrackRow from "../../components/media/TrackRow";
import { album, trackGroups } from "../../lib/pgq/discography";

import styles from "./Discografia.module.css";

export default function Discografia() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Discografia" title={`${album.title}: ${album.subtitle}`} lead={`${album.recordedNote} ${album.performersNote}`} />
        <div className={styles.layout}>
          <div>
            <AlbumCover src={album.cover} title={album.title} subtitle={album.subtitle} meta={album.meta} size={280} />
            <Button href={album.spotifyHref} target="_blank" rel="noopener noreferrer" fullWidth className={styles["spotify-button"]}>
              Ascolta su Spotify
            </Button>
          </div>
          <div>
            {trackGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.suite && <div className={styles["suite-heading"]}>{group.suite}</div>}
                {group.tracks.map((track) => (
                  <TrackRow key={track.index} index={track.index} title={track.title} note={track.note} duration={track.duration} />
                ))}
              </div>
            ))}
            <div className={styles["total-duration"]}>
              <span>Durata totale</span>
              <span>{album.totalDuration}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
