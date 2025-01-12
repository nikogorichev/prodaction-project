import { Flex, FlexProps } from "../Flex/Flex";

type Props = Omit<FlexProps, "direction">;

export const VStack = (props: Props) => {
  const { align = "start", ...otherProps } = props;
  return <Flex direction="column" align={align} {...otherProps} />;
};
