import type { Meta, StoryObj } from "@storybook/react-vite";

import SectionHeading from "./SectionHeading";

const meta = {
  title: "display/SectionHeading",
  component: SectionHeading,
  args: {
    eyebrow: "Dal 2010",
    title: "L'ensemble",
    lead: "Quattro chitarre classiche e un contrabbasso, un unico suono.",
    align: "left",
    tone: "default",
    size: "md",
  },
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center"],
    },
    tone: {
      control: "select",
      options: ["default", "inverse"],
    },
    size: {
      control: "select",
      options: ["md", "lg"],
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Centered: Story = {
  args: { align: "center" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Inverse: Story = {
  args: { tone: "inverse" },
  parameters: { backgrounds: { default: "dark" } },
};

export const WithoutEyebrow: Story = {
  args: { eyebrow: undefined },
};
