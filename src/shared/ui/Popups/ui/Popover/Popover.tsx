import { Popover as HPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { dropdownDirectionClasses } from "../../styles/consts";
import cls from "./Popover.module.scss";
import popupCls from "../../styles/popups.module.scss";

type Props = {
  trigger: ReactNode;
  className?: string;
  direction?: DropdownDirection;
};

export const Popover = (props: Props) => {
  const { className, trigger, direction = "bottom-left" } = props;
  const menuClasses = [dropdownDirectionClasses[direction]];

  return (
    <HPopover>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
    </HPopover>
  );
};
