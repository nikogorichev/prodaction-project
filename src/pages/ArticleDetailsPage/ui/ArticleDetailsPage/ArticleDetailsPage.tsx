import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import styles from "./ArticleDetailsPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
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
import { Page } from "widgets/Page/Page";
import { getArticleRecommendation } from "../../model/slice/articleDetailsPageRecommendationSlice";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendations";
import { fetchArticleRecommendation } from "../../model/services/fetchArticleRecommendation/fetchArticleRecommendation";
import { articleDetailsPageReducer } from "../../model/slice";

const reducersList: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendation.selectAll);
  const dispath = useDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id));
    dispath(fetchArticleRecommendation());
  }, [id]);

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
        <Text
          title="Рекоммендуем"
          className={styles.commentTitle}
          size={TextSize.L}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendations}
          target="_blank"
        />
        <Text
          title="Комментарии"
          className={styles.commentTitle}
          size={TextSize.L}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
