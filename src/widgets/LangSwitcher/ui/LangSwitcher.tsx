import { classNames } from "shared/lib/classNames/classNames";
import styles from "./langSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

type LangSwitcherProps = { className?: string };

export const LangSwitcher = ({ className }: LangSwitcherProps) => {

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.langSwithcer, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Русский")}
    </Button>
  );
};
