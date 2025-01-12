import { Flex, FlexProps } from "../Flex/Flex";

type Props = Omit<FlexProps, "direction">;

export const HStack = (props: Props) => {
  return <Flex direction="row" {...props} />;
};
