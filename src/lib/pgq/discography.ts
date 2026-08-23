import albumCover from "../../assets/images/american-southwest-cover.jpg";

export const album: Album = {
  cover: albumCover,
  title: "The American Southwest",
  subtitle: "Travel Notes",
  meta: "10 brani · 41'32\"",
  totalDuration: "41'32\"",
  recordedNote: "Registrato nell'aprile 2025 per Soundset Recordings.\nCopertina di Simone Di Prato.",
  intro:
    "Il disco conduce il pubblico in un meraviglioso viaggio musicale, tra suoni e atmosfere ispirati a luoghi e situazioni che il compositore Vito Nicola Paradiso ha fissato sulla carta, come vere e proprie note di viaggio o quadri musicali.",
  description:
    "Il disco conduce il pubblico in un meraviglioso viaggio musicale, tra suoni e atmosfere ispirati a luoghi e situazioni che il compositore Vito Nicola Paradiso ha fissato sulla carta, come vere e proprie note di viaggio o quadri musicali.",
  spotifyHref: "https://open.spotify.com/intl-it/artist/0tAeeBpXD7IaQ8zvSYHwii",
};

export const trackGroups: TrackGroup[] = [
  {
    suite: "Travel in America · 2013",
    tracks: [
      { index: 1, title: "America in the Sky", note: "il volo su Los Angeles, l'attesa che diventa gioia dell'arrivo", duration: "5'02" },
      { index: 2, title: "America on the Road", note: "il ritmo delle quattro frecce, poi la strada nel deserto dell'Arizona", duration: "4'48" },
      { index: 3, title: "America on the Train", note: "un treno lungo la costa della California, tra spiagge e onde", duration: "4'04" },
    ],
  },
  {
    suite: "Night in Las Vegas · 2024",
    tracks: [
      { index: 4, title: "Roulette & Slots", note: "la roulette dei casinò di Las Vegas, la tensione del gioco", duration: "3'53" },
      { index: 5, title: "For Boulevard", note: "una notte in decappottabile lungo i boulevard più scintillanti", duration: "3'02" },
    ],
  },
  {
    suite: "Riverside · 2025",
    tracks: [
      { index: 6, title: "Stars on the Mountain", note: "la salita notturna del Mount Rubidoux, gli occhi rivolti alle stelle", duration: "3'04" },
      { index: 7, title: "Easter Sunrise", note: "l'alba di Pasqua sulla vetta, un risveglio quasi mistico", duration: "4'37" },
    ],
  },
  {
    suite: null,
    tracks: [
      { index: 8, title: "Last Day of Summer", note: "un tramonto sull'oceano, la nostalgia della fine dell'estate", duration: "3'43" },
      { index: 9, title: "Refractions in the Arizona Desert", note: "l'aria che trema sull'asfalto rovente del deserto", duration: "3'30" },
      { index: 10, title: "Frontera", note: "il deserto di notte, tra paura e speranza di un attraversamento", duration: "5'49" },
    ],
  },
];

export type Track = {
  index: number;
  title: string;
  note: string;
  duration: string;
};

export type TrackGroup = {
  suite: string | null;
  tracks: Track[];
};

export type Album = {
  cover: string;
  title: string;
  subtitle: string;
  meta: string;
  totalDuration: string;
  recordedNote: string;
  intro: string;
  description: string;
  spotifyHref: string;
};
