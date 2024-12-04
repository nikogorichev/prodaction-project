import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Page.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Page = (props: Props) => {
  const { children, className } = props;
  return (
    <section className={classNames(styles.wrapper, {}, [className])}>
      {children}
    </section>
  );
};
