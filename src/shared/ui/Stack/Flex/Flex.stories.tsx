import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    gap: "4",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    gap: "8",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};

export const RowGap16: Story = {
  args: {
    gap: "16",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};

export const RowGap32: Story = {
  args: {
    gap: "32",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
};
