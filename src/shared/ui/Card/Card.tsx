import styles from "./Card.module.scss";
import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = (props: Props) => {
  const {
    className,
    children,
    theme = CardTheme.OUTLINED,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.card, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
