import { Popover as HPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { DropdownDirection } from "@/shared/types/ui";
import { dropdownDirectionClasses } from "../../styles/consts";
import cls from "./Popover.module.scss";
import popupCls from "../../styles/popups.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type Props = {
  trigger: ReactNode;
  className?: string;
  direction?: DropdownDirection;
  children: ReactNode;
};

export const Popover = (props: Props) => {
  const { className, trigger, direction = "bottom-left", children } = props;
  const menuClasses = [dropdownDirectionClasses[direction]];

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
