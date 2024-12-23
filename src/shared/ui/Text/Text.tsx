import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const additionalStyles = [
    className,
    styles[theme],
    styles[align],
    styles[size],
  ];

  return (
    <div className={classNames(styles.wrapper, {}, additionalStyles)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
