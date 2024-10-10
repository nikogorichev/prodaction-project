import { classNames } from "shared/lib/classNames/classNames";
import styles from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";

type Props = {
  comments?: Comment[];
  className?: string;
  isLoading?: boolean;
};

export const CommentList = (props: Props) => {
  const { comments, className, isLoading } = props;
  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            className={styles.comment}
          />
        ))
      ) : (
        <Text text="Комментарии отсутствуют" />
      )}
    </div>
  );
};
