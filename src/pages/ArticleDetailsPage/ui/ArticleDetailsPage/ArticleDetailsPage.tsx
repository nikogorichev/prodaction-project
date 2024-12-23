import styles from "./ArticleDetailsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { Text, TextSize } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendation } from "../../model/slice/articleDetailsPageRecommendationSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendation } from "../../model/services/fetchArticleRecommendation/fetchArticleRecommendation";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducersList: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendation.selectAll);
  const dispath = useDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id));
    dispath(fetchArticleRecommendation());
  }, [id]);

  const onSendComment = (text: string) => {
    dispath(addCommentForArticle(text));
  };

  if (!id) {
    return <Text text="Статья не найдена" />;
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <Page className={styles.ArticleDetailsPage}>
        <ArticleDetailsPageHeader />
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
