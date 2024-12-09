import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import { useSelector } from "react-redux";
import { ArticleList } from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { ArticlePageFilter } from "../ArticlesPageFilter/ArticlePageFilter";

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlePage());
  };

  if (error) {
    return (
      <Page>
        <Text
          theme={TextTheme.ERROR}
          text="Статьи не загрузились, попробуйте обновить страницу"
        />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.articlesPage)}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlePageFilter />
        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
          className={styles.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
