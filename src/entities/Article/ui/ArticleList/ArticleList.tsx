import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { HTMLAttributeAnchorTarget } from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

type Props = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
};

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = (props: Props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
    target,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return <Text title="Статей не найдено" size={TextSize.L} />;
  }

  return (
    // <WindowScroller>
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={500}
          rowCount={articles.length}
          rowHeight={500}
          rowRenderer={() => <div>row</div>}
          width={width}
        />
      )}
    </AutoSizer>
    // </WindowScroller>
    // <div className={classNames(styles.wrapper, {}, [className, styles[view]])}>
    //   {articles.length > 0 ? articles.map(renderArticle) : null}
    //   {isLoading && getSkeletons(view)}
    // </div>
  );
};
