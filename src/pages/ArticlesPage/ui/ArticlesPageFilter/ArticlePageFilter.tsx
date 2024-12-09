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
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";

export const ArticlePageFilter = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);

  const onChangeOrder = (newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
  };

  const onChangeSort = (newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
  };

  const onChangeSearch = (newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
  };

  const onViewClick = (view: ArticleView) => {
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
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
      </div>
      <Card className={styles.search}>
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
      </Card>
    </>
  );
};
