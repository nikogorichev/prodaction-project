import { Link, LinkProps } from "react-router-dom";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.OUTLINE,
  square,
  size = ButtonSize.L,
  disabled,
  ...otherProps
}) => {
  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  const optional: string[] = [className || "", styles[theme], styles[size]];

  return (
    <button
      className={classNames(styles.button, mods, optional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
