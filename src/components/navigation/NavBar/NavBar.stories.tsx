import type { Meta, StoryObj } from "@storybook/react-vite";

import logoPgqDark from "../../../assets/images/logo-pgq-dark.png";
import NavBar from "./NavBar";

const meta = {
  title: "navigation/NavBar",
  component: NavBar,
  args: {
    logoSrc: logoPgqDark,
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
