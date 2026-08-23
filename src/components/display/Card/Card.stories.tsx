import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta = {
  title: "display/Card",
  component: Card,
  args: {
    tone: "default",
    padding: "default",
    interactive: false,
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "sunken", "inverse"],
    },
    padding: {
      control: "select",
      options: ["default", "none"],
    },
  },
  render: (args) => (
    <Card {...args}>
      <h3 style={{ margin: 0 }}>Concerto d'autunno</h3>
      <p style={{ margin: "0.5rem 0 0" }}>Un viaggio tra le corde del quartetto di chitarre.</p>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sunken: Story = {
  args: { tone: "sunken" },
};

export const Inverse: Story = {
  args: { tone: "inverse" },
  parameters: { backgrounds: { default: "dark" } },
};

export const Interactive: Story = {
  args: { interactive: true },
};

export const NoPadding: Story = {
  args: { padding: "none" },
};
