import React, { InputHTMLAttributes, memo } from "react";
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
  ({ className, value, onChange, type = "text" }: InputProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };
    return (
      <div className={classNames(styles.input, {}, [className])}>
        <input type={type} value={value} onChange={onChangeHandler} />
      </div>
    );
  }
);

Input.displayName = "Input";
