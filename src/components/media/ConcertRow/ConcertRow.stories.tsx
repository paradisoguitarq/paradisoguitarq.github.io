import type { Meta, StoryObj } from "@storybook/react-vite";

import ConcertRow from "./ConcertRow";

const meta = {
  title: "media/ConcertRow",
  component: ConcertRow,
  args: {
    date: "14",
    month: "Nov",
    year: "2026",
    title: "Concerto d'autunno",
    venue: "Teatro Piccinni",
    city: "Bari",
    time: "20:30",
  },
} satisfies Meta<typeof ConcertRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutYear: Story = {
  args: { year: undefined },
};

export const VenueOnly: Story = {
  args: { city: undefined },
};

export const WithoutTime: Story = {
  args: { time: undefined },
};
