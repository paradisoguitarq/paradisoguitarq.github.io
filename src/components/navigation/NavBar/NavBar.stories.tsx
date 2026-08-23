import type { Meta, StoryObj } from "@storybook/react-vite";

import logoPgqWhite from "../../../assets/images/logo-pgq-hero-white.svg";
import NavBar from "./NavBar";

const meta = {
  title: "navigation/NavBar",
  component: NavBar,
  args: {
    logoSrc: logoPgqWhite,
    items: [
      { to: "/", label: "Home" },
      { to: "/ensemble", label: "Ensemble" },
      { to: "/discografia", label: "Discografia" },
      { to: "/concerti", label: "Concerti" },
      { to: "/galleria", label: "Galleria" },
      { to: "/contatti", label: "Contatti" },
    ],
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
