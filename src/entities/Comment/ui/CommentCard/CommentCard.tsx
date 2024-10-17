import styles from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

type Props = {
  comment: Comment;
  className?: string;
  isLoading?: boolean;
};

export const CommentCard = (props: Props) => {
  const { comment, className, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.commentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} className={styles.text} />
      </div>
    );
  }
  
  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <AppLink className={styles.header} to={`${RoutePath.profile}${comment.user.id}`}>
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : (
          ""
        )}
        <Text title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
};
