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
        comments={[]}
      />
    </div>
  );
};

export default ArticleDetailsPage;
