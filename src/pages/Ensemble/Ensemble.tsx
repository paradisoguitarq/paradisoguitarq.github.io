import { useSearchParams } from "react-router-dom";

import FramedImage from "../../components/display/FramedImage";
import SectionHeading from "../../components/display/SectionHeading";
import Tabs from "../../components/navigation/Tabs";
import { bios } from "../../lib/pgq/bios";
import { members } from "../../lib/pgq/members";
import type { MemberId } from "../../lib/pgq/members";

import styles from "./Ensemble.module.css";

const DEFAULT_MEMBER_ID: MemberId = "vito";

export default function Ensemble() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = searchParams.get("member");
  const activeMember = members.find((member) => member.id === requestedId) ?? members.find((member) => member.id === DEFAULT_MEMBER_ID)!;
  const activeBio = bios[activeMember.id];
  const memberTabs = members.map((member) => ({ id: member.id, label: member.name }));

  return (
    <>
      <section className={styles["intro-section"]}>
        <div className={styles["intro-container"]}>
          <SectionHeading eyebrow="L'ensemble" title="Il PGQ" />
          <p className={styles["intro-text"]}>
            Il repertorio include esclusivamente musiche descrittive del Maestro Paradiso, appositamente composte e adattate per questo ensemble da camera.
            Con sonorità eleganti, raffinate, originali e coinvolgenti, la musica cattura il pubblico fin dalle prime note, conducendolo in una sorta di
            meraviglioso viaggio musicale, tra suoni e atmosfere ispirati a luoghi e situazioni che il compositore ha fissato sulla carta, quasi fossero
            vere e proprie note di viaggio o dipinti musicali.
          </p>
          <p className={styles["intro-text"]}>
            Il repertorio del PGQ è ampio e spazia tra diversi temi: dalla bellezza dell'Italia alle problematiche di attualità, come la migrazione,
            l'ambiente e la violenza contro le donne, fino a diverse composizioni scritte in stile World Music.
          </p>
        </div>
      </section>

      <section className={styles["detail-section"]}>
        <div className={styles.container}>
          <div className={styles["tabs-row"]}>
            <Tabs items={memberTabs} value={activeMember.id} onChange={(id) => setSearchParams({ member: id })} />
          </div>
          <div className={styles["detail-grid"]}>
            <div>
              <FramedImage src={activeMember.photo} ratio="4 / 5" shape="soft" />
              <h3 className={styles["member-name"]}>{activeMember.name}</h3>
              <div className={styles["member-role"]}>{activeMember.role}</div>
            </div>
            <div>
              {activeBio.map((section, index) => (
                <div key={index}>
                  {section.heading && <h4 className={styles["bio-heading"]}>{section.heading}</h4>}
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className={styles["bio-paragraph"]}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
