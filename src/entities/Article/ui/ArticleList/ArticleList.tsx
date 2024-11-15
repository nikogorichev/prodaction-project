import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

type Props = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
};

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = (props: Props) => {
  const { className, articles, isLoading, view = ArticleView.GRID } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(styles.wrapper, {}, [className, styles[view]])}
      >
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  return (
    <div className={classNames(styles.wrapper, {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
