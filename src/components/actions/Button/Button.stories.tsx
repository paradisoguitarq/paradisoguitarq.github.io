import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  title: "actions/Button",
  component: Button,
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    fullWidth: false,
    children: "Scopri di più",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "inverse"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Inverse: Story = {
  args: { variant: "inverse" },
  parameters: { backgrounds: { default: "dark" } },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AsLink: Story = {
  args: { to: "/ensemble" },
};
