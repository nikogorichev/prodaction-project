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
  S = "size_s",
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

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

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

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(styles.wrapper, {}, additionalStyles)}>
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
