import styles from "./Tabs.module.css";

export default function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div role="tablist" className={styles.tabs}>
      {items.map((item) => {
        const active = value === item.id;
        const tabClassNames = [styles.tab, active ? styles["tab-active"] : undefined].filter(Boolean).join(" ");

        return (
          <button key={item.id} type="button" role="tab" aria-selected={active} className={tabClassNames} onClick={() => onChange(item.id)}>
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export type TabItem = {
  id: string;
  label: string;
};

export type TabsProps = {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
};
