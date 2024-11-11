import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/view-20-20.svg";

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
          <img src={article.img} className={styles.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          <Text text={article.type.join(", ")} className={styles.types} />
          <Text text={String(article.views)} className={styles.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={styles.title} />
      </div>
    </div>
  );
};
