import styles from "./ArticleDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComment } from "../ArticleDetailsComment/ArticleDetailsComment";
import { ArticleRating } from "@/features/articleRating";

const reducersList: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text="Статья не найдена" />;
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <Page className={styles.ArticleDetailsPage}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
