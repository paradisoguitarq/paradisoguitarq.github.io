import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import SectionHeading from "../../components/display/SectionHeading";
import { galleryPhotos } from "../../lib/pgq/gallery";

import styles from "./Galleria.module.css";

export default function Galleria() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openPhoto = openIndex !== null ? galleryPhotos[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((offset: number) => {
    setOpenIndex((current) => {
      if (current === null)
        return current;

      return (current + offset + galleryPhotos.length) % galleryPhotos.length;
    });
  }, []);

  useEffect(() => {
    if (openPhoto === null)
      return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape")
        close();

      if (event.key === "ArrowLeft")
        step(-1);

      if (event.key === "ArrowRight")
        step(1);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openPhoto, close, step]);

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
                className={styles.tile}
              >
                <span className={styles["tile-image"]} style={{ backgroundImage: `url("${photo.src}")` }} />
              </button>
            ))}
          </div>
          <p className={styles.credit}>Fotografie di Marcelo Di Gesù e carlocard2024.</p>
        </div>
      </section>

      {openPhoto && (
        <div className={styles.lightbox} onClick={close}>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Foto precedente"
            className={`${styles["control-button"]} ${styles["control-prev"]}`}
          >
            <FaChevronLeft size={20} />
          </button>

          <div
            role="img"
            aria-label={openPhoto.alt}
            className={styles["lightbox-image"]}
            style={{ backgroundImage: `url("${openPhoto.src}")` }}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Foto successiva"
            className={`${styles["control-button"]} ${styles["control-next"]}`}
          >
            <FaChevronRight size={20} />
          </button>

          <button type="button" onClick={close} aria-label="Chiudi" className={`${styles["control-button"]} ${styles["control-close"]}`}>
            <FaTimes size={22} />
          </button>
        </div>
      )}
    </>
  );
}
