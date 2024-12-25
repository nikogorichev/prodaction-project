import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { HTMLAttributeAnchorTarget } from "react";
import {
  AutoSizer,
  List,
  ListRowProps,
  WindowScroller,
} from "react-virtualized";
import { PAGE_ID } from "widgets/Page/Page";

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

  const isList = view === ArticleView.LIST;

  const itemsPerRow = isList ? 1 : 3;
  const rowCount = isList
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={`str${i}`}
          className={styles.card}
        />
      );
    }

    return (
      <div key={key} style={style} className={styles.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return <Text title="Статей не найдено" size={TextSize.L} />;
  }

  return (
    <WindowScroller
      onScroll={() => console.log("qqqq scroll")}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          className={classNames(styles.wrapper, {}, [className, styles[view]])}
          ref={registerChild}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isList ? 700 : 330}
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
};
