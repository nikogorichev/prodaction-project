import { classNames } from "shared/lib/classNames/classNames";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/view-20-20.svg";
import { Card } from "shared/ui/Card/Card";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

type Props = {
  className?: string;
  article: Article;
  view: ArticleView;
};

export const ArticleListItem = (props: Props) => {
  const { className, article, view } = props;
  const navigate = useNavigate();

  const onOpenArticle = () => {
    navigate(RoutePath.article_details + article.id);
  };

  const types = (
    <Text text={article.type.join(", ")} className={styles.types} />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(styles.wrapper, {}, [className, styles[view]])}
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img src={article.img} className={styles.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              Читать далее...
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper, {}, [className, styles[view]])}>
      <Card>
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
      </Card>
    </div>
  );
};
