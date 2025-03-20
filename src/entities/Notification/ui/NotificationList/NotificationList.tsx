import cls from "./NotificationList.module.scss";
import { VStack } from "shared/ui/Stack";
import { useNotifications } from "../../api/notificationApi";
import { classNames } from "shared/lib/classNames/classNames";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

type Props = {
  className?: string;
};

export const NotificationList = (props: Props) => {
  const { className } = props;
  const { data, isError, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames(cls.wrapper, {}, [className])}>
        <Skeleton width="100px" border="8px" height="80px" />
        <Skeleton width="100px" border="8px" height="80px" />
        <Skeleton width="100px" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames(cls.wrapper, {}, [className])}>
      {data?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
};
