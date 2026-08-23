import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import Tabs from "./Tabs";
import type { TabsProps } from "./Tabs";

const meta = {
  title: "navigation/Tabs",
  component: Tabs,
  args: {
    items: [
      { id: "bio", label: "Biografia" },
      { id: "repertorio", label: "Repertorio" },
      { id: "stampa", label: "Rassegna stampa" },
    ],
    value: "bio",
    onChange: () => {},
  },
  render: (args) => <ControlledTabs {...args} />,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ManyTabs: Story = {
  args: {
    items: [
      { id: "bio", label: "Biografia" },
      { id: "repertorio", label: "Repertorio" },
      { id: "stampa", label: "Rassegna stampa" },
      { id: "discografia", label: "Discografia" },
      { id: "concerti", label: "Concerti" },
    ],
    value: "bio",
    onChange: () => {},
  },
};

function ControlledTabs({ items, value }: TabsProps) {
  const [current, setCurrent] = useState(value);

  return <Tabs items={items} value={current} onChange={setCurrent} />;
}
