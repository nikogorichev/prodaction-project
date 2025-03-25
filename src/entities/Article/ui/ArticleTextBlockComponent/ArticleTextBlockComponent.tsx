import { Text } from "@/shared/ui/Text/Text";
import { ArticleTextBlock } from "../../model/types/article";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./ArticleTextBlockComponent.module.scss";

type Props = {
  block: ArticleTextBlock;
  className?: string;
};

export const ArticleTextBlockComponent = (props: Props) => {
  const { block, className } = props;
  return (
    <div
      className={classNames(styles.articleTextBlockComponent, {}, [className])}
    >
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
};
