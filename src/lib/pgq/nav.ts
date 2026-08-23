export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/ensemble", label: "Ensemble" },
  { to: "/discografia", label: "Discografia" },
  { to: "/concerti", label: "Concerti" },
  { to: "/galleria", label: "Galleria" },
  { to: "/contatti", label: "Contatti" },
];

export type NavItem = {
  to: string;
  label: string;
};
