import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import { useSelector } from "react-redux";
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage";

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const inited = useSelector(getArticlesPageInited);

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  });

  const onViewClick = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

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
      <Page className={classNames(styles.wrapper)} onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
