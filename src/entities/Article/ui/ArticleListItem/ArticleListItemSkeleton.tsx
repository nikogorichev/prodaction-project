import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

type Props = {
  className?: string;
  view: ArticleView;
};

export const ArticleListItemSkeleton = (props: Props) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div
        className={classNames(styles.wrapper, {}, [className, styles[view]])}
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.img} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper, {}, [className, styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
};
