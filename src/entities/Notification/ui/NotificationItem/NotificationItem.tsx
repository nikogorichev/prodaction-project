import cls from "./NotificationItem.module.scss";
import { Card, CardTheme } from "@/shared/ui/Card/Card";
import { Text } from "@/shared/ui/Text/Text";
import { Notification } from "../../model/types/notification";

type Props = {
  notification: Notification;
};

export const NotificationItem = (props: Props) => {
  const {
    notification: { title, description, href, userId },
  } = props;

  const content = (
    <Card theme={CardTheme.OUTLINED} className={cls.notificationItem}>
      <Text title={title} text={description} />
    </Card>
  );

  if (href) {
    <a target="_blank" href={href} rel="noreferrer" className={cls.link}>
      {content}
    </a>;
  }

  return content;
};
