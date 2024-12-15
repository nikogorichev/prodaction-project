import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import styles from "./ArticlePageFilter.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { fetchArticleList } from "../../model/services/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article";
import { ArticleTypeTabs } from "entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs";

export const ArticlePageFilter = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = () => {
    dispatch(fetchArticleList({ replace: true }));
  };

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeOrder = (newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  const onChangeSort = (newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  const onChangeSearch = (newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  };

  const onChangeType = (newType: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setType(newType.value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };
  return (
    <>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          sort={sort}
          order={order}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={styles.search}>
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={onChangeType} />
    </>
  );
};
