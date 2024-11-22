import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import { useSelector } from "react-redux";
import { Article, ArticleList } from "entities/Article";
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
import { fetchArticleList } from "../../model/services/fetchArticlesList";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

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
    dispatch(fetchArticleList());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.wrapper)}>
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
