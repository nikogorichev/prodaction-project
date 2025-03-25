import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Icon.module.scss";

type Props = {
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  className?: string;
  inverted?: boolean;
};

export const Icon = (props: Props) => {
  const { Svg, className, inverted } = props;

  const mods = {
    [styles.inverted]: inverted,
  };

  return <Svg className={classNames(styles.icon, mods, [className])} />;
};
