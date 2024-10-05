import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Icon.module.scss";

type Props = {
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  className?: string;
};

export const Icon = (props: Props) => {
  const { Svg, className } = props;

  return <Svg className={classNames(styles.icon, {}, [className])} />;
};
