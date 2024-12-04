import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "shared/ui/Page/Page";

const reducersList: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const dispath = useDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const navigate = useNavigate();

  useInitialEffect(() => dispath(fetchCommentsByArticleId(id)), [id]);

  const onSendComment = (text: string) => {
    dispath(addCommentForArticle(text));
  };

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  if (!id) {
    return <Text text="Статья не найдена" />;
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <Page className={styles.ArticleDetailsPage}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          Назад к списку
        </Button>
        <ArticleDetails id={id} />
        <Text title="Комментарии" className={styles.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
