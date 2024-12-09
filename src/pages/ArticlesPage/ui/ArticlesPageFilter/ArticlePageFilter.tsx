import { ArticleView, ArticleViewSelector } from "entities/Article";
import styles from "./ArticlePageFilter.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { Select } from "shared/ui/Select/Select";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";

export const ArticlePageFilter = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const onViewClick = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };
  return (
    <>
      <div className={styles.sortWrapper}>
        <Select label="Сортировать по" />
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
      </div>
      <Card className={styles.search}>
        <Input placeholder="Поиск" />
      </Card>
    </>
  );
};
