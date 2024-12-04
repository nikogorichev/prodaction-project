import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import { useSelector } from "react-redux";
import {
  Article,
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
import { fetchArticleList } from "../../model/services/fetchArticlesList";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Page } from "shared/ui/Page/Page";

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
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticleList({
        page: 1,
      })
    );
  });

  const onViewClick = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(styles.wrapper)}>
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
