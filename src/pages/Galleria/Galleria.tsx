import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import SectionHeading from "../../components/display/SectionHeading";
import { galleryPhotos } from "../../lib/pgq/gallery";

import styles from "./Galleria.module.css";

export default function Galleria() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openPhoto = openIndex !== null ? galleryPhotos[openIndex] : null;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading title="Galleria" lead="Immagini dal vivo e dai palcoscenici del PGQ." />
          <div className={styles.grid}>
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={photo.alt}
                className={`${styles.tile} ${index === 0 ? styles["tile-featured"] : ""}`}
              >
                <span className={styles["tile-image"]} style={{ backgroundImage: `url(${photo.src})` }} />
              </button>
            ))}
          </div>
          <p className={styles.credit}>Fotografie di Marcelo Di Gesù e carlocard2024.</p>
        </div>
      </section>

      {openPhoto && (
        <div className={styles.lightbox} onClick={() => setOpenIndex(null)}>
          <div
            role="img"
            aria-label={openPhoto.alt}
            className={styles["lightbox-image"]}
            style={{ backgroundImage: `url(${openPhoto.src})` }}
            onClick={(event) => event.stopPropagation()}
          />
          <button type="button" onClick={() => setOpenIndex(null)} aria-label="Chiudi" className={styles["close-button"]}>
            <FaTimes size={22} />
          </button>
        </div>
      )}
    </>
  );
}
