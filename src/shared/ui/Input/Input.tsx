import React, { InputHTMLAttributes, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({ className, value, onChange, type = "text", ...otherProps }: InputProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };
    return (
      <div className={classNames(styles.inputWrapper, {}, [className])}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          {...otherProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
