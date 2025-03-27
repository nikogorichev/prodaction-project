import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Icon.module.scss";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  className?: string;
  inverted?: boolean;
}

export const Icon = (props: Props) => {
  const { Svg, className, inverted, ...otherProps } = props;

  const mods = {
    [styles.inverted]: inverted,
  };

  return (
    <Svg
      className={classNames(styles.icon, mods, [className])}
      {...otherProps}
    />
  );
};
