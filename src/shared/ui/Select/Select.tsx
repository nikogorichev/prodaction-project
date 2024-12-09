import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectTypes<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  readonly,
  onChange,
}: SelectTypes<T>) => {
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
    const selectedValue = options?.find(
      (opt) => String(opt.value) === e.target.value
    )?.value;
    if (selectedValue) {
      onChange?.(selectedValue);
    }
  };

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {label ? <span className={styles.label}>{label}</span> : ""}
      <select
        className={styles.select}
        onChange={onChangeHandler}
        value={value}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};
