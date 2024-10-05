import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
  title: "shared/Code",
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    children: `import type { Meta, StoryObj } from "@storybook/react";
   import { Theme } from "app/providers/ThemeProvider";
   import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
   import { Code } from "./Code";
   
   const meta: Meta<typeof Code> = {
     title: "shared/Code",
     component: Code,
   };
   
   export default meta;
   type Story = StoryObj<typeof Code>;
   
   export const Normal: Story = {
     args: {
      children: "code"
     },
   };`,
  },
};
