import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectTypes {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  className,
  label,
  options,
  value,
  onChange,
}: SelectTypes) => {
  const optionsList = useMemo(() => {
    return options?.map(({ value, content }) => {
      return (
        <option className={styles.option} key={value} value={value}>
          {content}
        </option>
      );
    });
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {label ? <span className={styles.label}>{label}</span> : ""}
      <select
        className={styles.select}
        onChange={onChangeHandler}
        value={value}
      >
        {optionsList}
      </select>
    </div>
  );
};
