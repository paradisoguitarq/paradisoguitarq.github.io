import type { Meta, StoryObj } from "@storybook/react-vite";

import TrackRow from "./TrackRow";

const meta = {
  title: "media/TrackRow",
  component: TrackRow,
  args: {
    index: 1,
    title: "Sonata al tramonto",
    note: "Vito Nicola Paradiso",
    duration: "4:32",
  },
} satisfies Meta<typeof TrackRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutNote: Story = {
  args: { note: undefined },
};

export const TrackList: Story = {
  render: () => (
    <div>
      <TrackRow index={1} title="Sonata al tramonto" note="Vito Nicola Paradiso" duration="4:32" />
      <TrackRow index={2} title="Notturno per quattro chitarre" duration="3:58" />
      <TrackRow index={3} title="American Southwest" note="Vito Nicola Paradiso" duration="5:12" />
    </div>
  ),
};
