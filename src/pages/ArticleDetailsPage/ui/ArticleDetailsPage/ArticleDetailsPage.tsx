import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import styles from "./ArticleDetailsPage.module.scss";

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text="Статья не найдена" />;
  }

  return (
    <div className={styles.ArticleDetailsPage}>
      <ArticleDetails id={id} />
      <Text title="Комментарии" className={styles.commentTitle} />
      <CommentList
        comments={[
          {
            id: "1",
            text: "comment 1",
            user: {
              id: "1",
              username: "test",
              avatar: "https://i.pinimg.com/736x/94/3a/69/943a69bb778d0a3621b9e6fbfbc6044c.jpg"
            },
          },
          {
            id: "2",
            text: "comment 2",
            user: {
              id: "2",
              username: "dev",
            },
          },
        ]}
      />
    </div>
  );
};

export default ArticleDetailsPage;
