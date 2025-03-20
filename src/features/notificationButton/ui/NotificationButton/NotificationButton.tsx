import cls from "./NotificationButton.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";
import { classNames } from "shared/lib/classNames/classNames";

type Props = {
  className?: string;
};

export const NotificationButton = (props: Props) => {
  const { className } = props;

  return (
    <Popover
      className={classNames("", {}, [className])}
      direction="bottom-left"
      trigger={
        <Button theme={ThemeButton.CLEAR}>
          <Icon inverted Svg={NotificationIcon} />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
};
