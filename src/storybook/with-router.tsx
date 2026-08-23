import type { Decorator } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

const withRouter: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export default withRouter;
