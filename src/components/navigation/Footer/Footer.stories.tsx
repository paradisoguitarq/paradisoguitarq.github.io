import type { Meta, StoryObj } from "@storybook/react-vite";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import logoPgqWhite from "../../../assets/images/logo-pgq-white.png";
import Footer from "./Footer";

const meta = {
  title: "navigation/Footer",
  component: Footer,
  args: {
    logoSrc: logoPgqWhite,
    note: "Paradiso Guitar Quartet & Bass, quattro chitarre classiche e un contrabbasso.",
    social: [
      { label: "Facebook", href: "https://facebook.com", icon: <FaFacebook size={18} /> },
      { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram size={18} /> },
      { label: "YouTube", href: "https://youtube.com", icon: <FaYoutube size={18} /> },
    ],
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
