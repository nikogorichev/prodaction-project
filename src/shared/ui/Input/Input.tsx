import React, { InputHTMLAttributes, memo, useState } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    readonly,
    ...otherProps
  }: InputProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };
    const mods: Mods = { [styles.readonly]: readonly };
    return (
      <div className={classNames(styles.inputWrapper, mods, [className])}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
