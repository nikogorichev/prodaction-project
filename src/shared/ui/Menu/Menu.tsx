import cls from "./Menu.module.scss";
import { Fragment, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Menu as HMenu } from "@headlessui/react";
import { AppLink } from "../AppLink/AppLink";
import { DropdownDirection } from "shared/types/ui";

export type MenuItem = {
  content: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
};

type MenuProps = {
  trigger: ReactNode;
  items: Array<MenuItem>;
  className?: string;
  direction?: DropdownDirection;
};

const dropdownDirectionClasses: Record<DropdownDirection, string> = {
  "top-left": cls.optionsTopLeft,
  "top-right": cls.optionsTopRight,
  "bottom-left": cls.optionsBottomLeft,
  "bottom-right": cls.optionsBottomRight,
};

export const Menu = (props: MenuProps) => {
  const { className, trigger, items, direction = "bottom-left" } = props;
  const menuClasses = [dropdownDirectionClasses[direction]];
  return (
    <HMenu as="div" className={classNames(cls.menuWrapper, {}, [className])}>
      <HMenu.Button className={cls.menuBtn}>{trigger}</HMenu.Button>
      <HMenu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.itemActive]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <HMenu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={item.href}
              >
                {content}
              </HMenu.Item>
            );
          }

          return (
            <HMenu.Item as={Fragment} disabled={item.disabled} key={item.href}>
              {content}
            </HMenu.Item>
          );
        })}
      </HMenu.Items>
    </HMenu>
  );
};
