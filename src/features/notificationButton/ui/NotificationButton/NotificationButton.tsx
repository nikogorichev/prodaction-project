import cls from "./NotificationButton.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";
import { classNames } from "shared/lib/classNames/classNames";
import { useDevice } from "shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { useState } from "react";

type Props = {
  className?: string;
};

export const NotificationButton = (props: Props) => {
  const { className } = props;
  const isMobile = useDevice();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const trigger = (
    <Button theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
      <Icon inverted Svg={NotificationIcon} />
    </Button>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      className={classNames("", {}, [className])}
      direction="bottom-left"
      trigger={trigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
};
