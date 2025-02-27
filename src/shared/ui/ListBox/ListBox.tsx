import { Fragment, ReactNode } from "react";
import cls from "./ListBox.module.scss";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import { DropdownDirection } from "shared/types/ui";

export type ListBoxItem = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
};

const dropdownDirectionClasses: Record<DropdownDirection, string> = {
  "top-left": cls.optionsTopLeft,
  "top-right": cls.optionsTopRight,
  "bottom-left": cls.optionsBottomLeft,
  "bottom-right": cls.optionsBottomRight,
};

type ListBoxProps = {
  items?: Array<ListBoxItem>;
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
};

export const ListBox = (props: ListBoxProps) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = "bottom-left",
  } = props;

  const optionsClasses = [dropdownDirectionClasses[direction]];

  return (
    <HStack gap="4">
      {label && <span>{label}</span>}
      <HListBox
        as="div"
        className={classNames(cls.listBoxWrapper, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger} disabled={readonly}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.itemActive]: active,
                    [cls.itemDisabled]: item.disabled,
                  })}
                >
                  {selected && "!!!!"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
