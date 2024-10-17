import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import styles from "./ArticleDetailsPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments";

const reducersList: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  if (!id) {
    return <Text text="Статья не найдена" />;
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={styles.ArticleDetailsPage}>
        <ArticleDetails id={id} />
        <Text title="Комментарии" className={styles.commentTitle} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
