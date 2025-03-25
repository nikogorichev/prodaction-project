import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./themeSwitcher.module.scss";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import LightIcon from "@/shared/assets/icons/themeLight.svg";
import DarkIcon from "@/shared/assets/icons/themeDark.svg";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

type ThemeSwitcherProps = { className?: string };

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const iconsThemeList: Record<Theme, JSX.Element> = {
    [Theme.DARK]: <DarkIcon />,
    [Theme.LIGHT]: <LightIcon />,
    [Theme.ORANGE]: <LightIcon />,
  };

  return (
    <Button
      className={classNames(styles.themeSwithcer, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {iconsThemeList[theme]}
    </Button>
  );
};
