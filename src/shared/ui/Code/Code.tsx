import { ReactNode } from "react";
import styles from "./Code.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Code = (props: Props) => {
  const { children, className } = props;

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button className={styles.copyBtn}>Копировать</Button>
      <code>{children}</code>
    </pre>
  );
};
