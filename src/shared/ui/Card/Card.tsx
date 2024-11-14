import styles from "./Card.module.scss";
import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = (props: Props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(styles.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
