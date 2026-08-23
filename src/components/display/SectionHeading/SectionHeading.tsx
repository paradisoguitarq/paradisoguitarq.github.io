import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, lead, align = "left", tone = "default", size = "md" }: SectionHeadingProps) {
  const alignClassName = styles[`align-${align}`];
  const headingClassNames = [styles.heading, alignClassName, tone === "inverse" ? styles["tone-inverse"] : undefined, size === "lg" ? styles["size-lg"] : undefined]
    .filter(Boolean)
    .join(" ");
  const ruleClassNames = [styles.rule, alignClassName].filter(Boolean).join(" ");

  return (
    <header className={headingClassNames}>
      <div className={ruleClassNames} aria-hidden="true" />
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}

export type SectionHeadingAlign = "left" | "center";
export type SectionHeadingTone = "default" | "inverse";
export type SectionHeadingSize = "md" | "lg";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: SectionHeadingAlign;
  tone?: SectionHeadingTone;
  size?: SectionHeadingSize;
};
