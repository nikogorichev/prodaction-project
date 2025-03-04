import { ArticleList } from "entities/Article";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage";
import { Text, TextTheme } from "shared/ui/Text/Text";

export const ArticlesInfiniteList = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        text="Статьи не загрузились, попробуйте обновить страницу"
      />
    );
  }

  return <ArticleList view={view} articles={articles} isLoading={isLoading} />;
};
