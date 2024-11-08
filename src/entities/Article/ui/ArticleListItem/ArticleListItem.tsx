import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";
import { Text } from "shared/ui/Text/Text";

type Props = {
  className?: string;
  article: Article;
  view: ArticleView;
};

export const ArticleListItem = (props: Props) => {
  const { className, article, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div
        className={classNames(styles.wrapper, {}, [className, styles[view]])}
      >
        {article.title}
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper, {}, [className, styles[view]])}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={article.img} className={styles.img} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
      </div>
    </div>
  );
};
