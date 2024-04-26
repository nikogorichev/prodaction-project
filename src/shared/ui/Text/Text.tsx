import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  const additionalStyles = [className, styles[theme]];
  return (
    <div className={classNames(styles.wrapper, {}, additionalStyles)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
