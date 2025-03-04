import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { ArticlePageFilter } from "../ArticlesPageFilter/ArticlePageFilter";
import { ArticlesInfiniteList } from "../ArticlesInfiniteList/ArticlesInfiniteList";

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlePage());
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.articlesPage)}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlePageFilter />
        <ArticlesInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
