import type { CSSProperties } from "react";

import styles from "./FramedImage.module.css";

export default function FramedImage({ src, alt = "", shape = "rect", ratio = "4 / 3", caption, zoom = false }: FramedImageProps) {
  const frameClassNames = [styles.frame, styles[`shape-${shape}`], zoom ? styles.zoom : undefined].filter(Boolean).join(" ");
  const frameStyle: CSSProperties = { "--frame-ratio": ratio } as CSSProperties;

  return (
    <figure className={styles.figure}>
      <div className={frameClassNames} style={frameStyle}>
        <img src={src} alt={alt} className={styles.image} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export type FramedImageShape = "rect" | "soft" | "arch";

export type FramedImageProps = {
  src: string;
  alt?: string;
  shape?: FramedImageShape;
  ratio?: string;
  caption?: string;
  zoom?: boolean;
};
