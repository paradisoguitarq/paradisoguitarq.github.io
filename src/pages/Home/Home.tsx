import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

import Button from "../../components/actions/Button";
import Card from "../../components/display/Card";
import FramedImage from "../../components/display/FramedImage";
import SectionHeading from "../../components/display/SectionHeading";
import AlbumCover from "../../components/media/AlbumCover";
import ConcertRow from "../../components/media/ConcertRow";
import heroBackground from "../../assets/images/background.jpeg";
import heroLogo from "../../assets/images/logo-pgq-hero-white.svg";
import { nextConcert } from "../../lib/pgq/concerts";
import { album } from "../../lib/pgq/discography";
import { members } from "../../lib/pgq/members";
import { socialLinks } from "../../lib/pgq/social";

import styles from "./Home.module.css";

const YOUTUBE_VIDEO_ID = "HHpE6SddOms";

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const featuredMember = members[0];
  const otherMembers = members.slice(1);

  return (
    <>
      <section className={styles.hero}>
        <img src={heroBackground} alt="Il PGQ in concerto" className={styles["hero-image"]} />
        <div className={styles["hero-scrim-full"]} />
        <div className={styles["hero-scrim-bottom"]} />
        <div className={styles["hero-content"]}>
          <img src={heroLogo} alt="PGQ, Paradiso Guitar Quartet & Bass" className={styles["hero-logo"]} />
          <p className={styles["hero-tagline"]}>Tre generazioni di musicisti raccontano il mondo attraverso le corde</p>
          <div className={styles["hero-social"]}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles["hero-social-link"]}>
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles["on-raised"]}`}>
        <div className={`${styles.container} ${styles["split-grid"]}`}>
          <div>
            <SectionHeading eyebrow="L'ensemble" title="Tre generazioni, una scuola" />
            <p className={styles["intro-text"]}>
              Il PGQ (Paradiso Guitar Quartet &amp; Bass) è un ensemble costituito da quattro chitarre classiche ed un contrabbasso, nato da un'idea del
              compositore, concertista, didatta e autore Vito Nicola Paradiso. L'ensemble riunisce tre generazioni di chitarristi provenienti dalla scuola
              del Maestro Paradiso, affiancati dal contrabbasso, che conferisce colore e profondità alle esecuzioni.
            </p>
            <Button variant="secondary" to="/ensemble" className={styles["intro-button"]}>
              Conosci l'ensemble
            </Button>
          </div>
          <FramedImage src={heroBackground} ratio="4 / 5" shape="arch" zoom />
        </div>
      </section>

      <section className={`${styles.section} ${styles["on-inverse"]}`}>
        <div className={styles.container}>
          <SectionHeading title="Il PGQ dal vivo" lead="Un assaggio dal repertorio, registrato in concerto." tone="inverse" align="center" />
          <div className={styles["video-frame"]}>
            {videoPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="Il PGQ dal vivo"
                className={styles["video-iframe"]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button type="button" onClick={() => setVideoPlaying(true)} aria-label="Guarda il video" className={styles["video-play-button"]}>
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Anteprima video del PGQ in concerto"
                  className={styles["video-thumb"]}
                />
                <span className={styles["video-play-overlay"]}>
                  <span className={styles["video-play-icon"]}>
                    <FaPlay size={26} />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles["on-page"]}`}>
        <div className={styles.container}>
          <SectionHeading title="I musicisti" lead="Vito Nicola Paradiso dirige un ensemble di quattro chitarre e un contrabbasso." />
          <div className={styles["musicians-grid"]}>
            <Link
              to={`/ensemble?member=${featuredMember.id}`}
              aria-label={featuredMember.name}
              className={`${styles["musician-tile"]} ${styles["musician-tile-featured"]}`}
            >
              <span
                className={styles["musician-image"]}
                style={{ backgroundImage: `url(${featuredMember.photo})`, backgroundPosition: featuredMember.photoPosition }}
              />
              <span className={styles["musician-scrim"]} />
              <span className={styles["musician-caption"]}>
                <span className={styles["musician-name"]}>{featuredMember.name}</span>
                <span className={styles["musician-role"]}>{featuredMember.role}</span>
              </span>
            </Link>
            {otherMembers.map((member) => (
              <Link key={member.id} to={`/ensemble?member=${member.id}`} aria-label={member.name} className={styles["musician-tile"]}>
                <span
                  className={styles["musician-image"]}
                  style={{ backgroundImage: `url(${member.photo})`, backgroundPosition: member.photoPosition }}
                />
                <span className={styles["musician-scrim"]} />
                <span className={styles["musician-caption"]}>
                  <span className={styles["musician-name"]}>{member.name}</span>
                  <span className={styles["musician-role"]}>{member.role}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles["on-raised"]}`}>
        <div className={`${styles.container} ${styles["discography-grid"]}`}>
          <AlbumCover src={album.cover} title={album.title} subtitle={album.subtitle} meta={album.meta} size={320} />
          <div>
            <SectionHeading eyebrow="Discografia" title={`${album.title}: ${album.subtitle}`} lead={album.recordedNote} />
            <p className={styles["discography-description"]}>{album.description}</p>
            <div className={styles["discography-actions"]}>
              <Button href={album.spotifyHref} target="_blank" rel="noopener noreferrer">
                Ascolta su Spotify
              </Button>
              <Button variant="ghost" to="/discografia">
                Tutto l'album →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles["on-warm"]}`}>
        <div className={styles.container}>
          <SectionHeading eyebrow="In concerto" title="Prossima data" />
          <Card className={styles["concert-actions"]}>
            <ConcertRow {...nextConcert} />
          </Card>
          <Button variant="ghost" to="/concerti" className={styles["concert-actions"]}>
            Tutte le informazioni →
          </Button>
        </div>
      </section>
    </>
  );
}
