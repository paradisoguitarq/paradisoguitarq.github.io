import type { Meta, StoryObj } from "@storybook/react-vite";

import americanSouthwestCover from "../../../assets/images/american-southwest-cover.jpg";
import AlbumCover from "./AlbumCover";

const meta = {
  title: "media/AlbumCover",
  component: AlbumCover,
  args: {
    src: americanSouthwestCover,
    title: "American Southwest",
    subtitle: "Paradiso Guitar Quartet & Bass",
    meta: "2019 · Studio",
    size: 200,
  },
} satisfies Meta<typeof AlbumCover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 120 },
};

export const Large: Story = {
  args: { size: 280 },
};

export const AsLink: Story = {
  args: { href: "/discografia" },
};

export const MinimalInfo: Story = {
  args: { subtitle: undefined, meta: undefined },
};
