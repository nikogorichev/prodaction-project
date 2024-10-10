import styles from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";

type Props = {
  comment: Comment;
  className?: string;
  isLoading?: boolean
};

export const CommentCard = (props: Props) => {
  const { comment, className, isLoading } = props;

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <div className={styles.header}>
        <Avatar size={30}/>
        <Text title={comment.user.username}/>
      </div>
      <Text className={styles.text} text={comment.text}/>
    </div>
  );
};
