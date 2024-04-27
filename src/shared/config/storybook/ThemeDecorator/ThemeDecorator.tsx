import "app/styles/index.scss";
import { Decorator } from "@storybook/react";

export const ThemeDecorator: Decorator = (Story) => <div>{Story()}</div>;
