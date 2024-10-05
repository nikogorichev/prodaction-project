import { ReactNode } from "react";
import styles from "./Code.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";
import { Icon } from "../Icon/Icon";

type Props = {
  text: string;
  className?: string;
};

export const Code = (props: Props) => {
  const { text, className } = props;

  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button
        className={styles.copyBtn}
        theme={ThemeButton.CLEAR}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
