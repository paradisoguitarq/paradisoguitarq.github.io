import type { Meta, StoryObj } from "@storybook/react-vite";

import vitoNicolaParadiso from "../../../assets/images/vito-nicola-paradiso.jpg";
import FramedImage from "./FramedImage";

const meta = {
  title: "display/FramedImage",
  component: FramedImage,
  args: {
    src: vitoNicolaParadiso,
    alt: "Vito Nicola Paradiso",
    shape: "rect",
    ratio: "4 / 3",
    zoom: false,
  },
  argTypes: {
    shape: {
      control: "select",
      options: ["rect", "soft", "arch"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "24rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FramedImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rect: Story = {};

export const Soft: Story = {
  args: { shape: "soft" },
};

export const Arch: Story = {
  args: { shape: "arch", ratio: "3 / 4" },
};

export const WithCaption: Story = {
  args: { caption: "Vito Nicola Paradiso, chitarra e composizione" },
};

export const Zoom: Story = {
  args: { zoom: true },
};

export const Positioned: Story = {
  args: { ratio: "4 / 5", shape: "soft", position: "32% center" },
};
