import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/paradisoguitarquartet_andbass", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61562963086510", Icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC5Xwt0QqwoaXI6hz10yZ58g", Icon: FaYoutube },
  { label: "Spotify", href: "https://open.spotify.com/intl-it/artist/0tAeeBpXD7IaQ8zvSYHwii", Icon: FaSpotify },
];

export const contactEmail = "info@paradisoguitarq.it";

export type SocialLink = {
  label: string;
  href: string;
  Icon: IconType;
};
