import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

type Props = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
};

export const ArticleList = (props: Props) => {
  const { className, articles, isLoading, view = ArticleView.GRID } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  );

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
