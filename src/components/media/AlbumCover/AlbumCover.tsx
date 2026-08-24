import type { CSSProperties } from "react";

import styles from "./AlbumCover.module.css";

export default function AlbumCover({ src, title, subtitle, meta, size = 200 }: AlbumCoverProps) {
  const coverStyle: CSSProperties = { "--cover-size": `${size}px` } as CSSProperties;

  return (
    <div className={styles.cover} style={coverStyle}>
      <div className={styles.artwork}>
        <img src={src} alt={title ?? ""} className={styles.image} />
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {meta && <div className={styles.meta}>{meta}</div>}
    </div>
  );
}

export type AlbumCoverProps = {
  src: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  size?: number;
};
