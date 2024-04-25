import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
}

export const Text = ({ className, title, text }: TextProps) => {
  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
