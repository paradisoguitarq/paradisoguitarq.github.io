import annamariaPhoto from "../../assets/images/annamaria-plantamura.jpg";
import backgroundPhoto from "../../assets/images/background.jpeg";
import ernestoPhoto from "../../assets/images/ernesto-losavio.jpeg";
import gabriellaPhoto from "../../assets/images/gabriella-perniola.jpg";
import gianvitoPhoto from "../../assets/images/gianvito-difilippo.jpeg";
import vitoPhoto from "../../assets/images/vito-nicola-paradiso.jpg";

export const galleryPhotos: GalleryPhoto[] = [
  { src: backgroundPhoto, alt: "Il PGQ in concerto, luci di scena" },
  { src: vitoPhoto, alt: "Vito Nicola Paradiso alla chitarra" },
  { src: annamariaPhoto, alt: "Annamaria Plantamura alla chitarra" },
  { src: gianvitoPhoto, alt: "Gianvito Difilippo alla chitarra" },
  { src: gabriellaPhoto, alt: "Gabriella Perniola alla chitarra" },
  { src: ernestoPhoto, alt: "Ernesto Losavio al contrabbasso" },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
};
