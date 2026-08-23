import annamariaPhoto from "../../assets/images/annamaria-plantamura.jpg";
import ernestoPhoto from "../../assets/images/ernesto-losavio.jpeg";
import gabriellaPhoto from "../../assets/images/gabriella-perniola.jpg";
import gianvitoPhoto from "../../assets/images/gianvito-difilippo.jpeg";
import vitoPhoto from "../../assets/images/vito-nicola-paradiso.jpg";

export const members: Member[] = [
  { id: "vito", name: "Vito Nicola Paradiso", role: "Chitarra, composizione e direzione", photo: vitoPhoto, photoPosition: "top", portraitPosition: "20% center" },
  { id: "annamaria", name: "Annamaria Plantamura", role: "Chitarra", photo: annamariaPhoto, portraitPosition: "32% center" },
  { id: "gianvito", name: "Gianvito Difilippo", role: "Chitarra", photo: gianvitoPhoto, photoPosition: "top" },
  { id: "gabriella", name: "Gabriella Perniola", role: "Chitarra", photo: gabriellaPhoto },
  { id: "ernesto", name: "Ernesto Losavio", role: "Contrabbasso", photo: ernestoPhoto },
];

export type MemberId = "vito" | "annamaria" | "gianvito" | "gabriella" | "ernesto";

export type Member = {
  id: MemberId;
  name: string;
  role: string;
  photo: string;
  photoPosition?: string;
  portraitPosition?: string;
};
