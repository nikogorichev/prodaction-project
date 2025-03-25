import { Text, TextAlign } from "@/shared/ui/Text/Text";
import { ArticleImageBlock } from "../../model/types/article";
import styles from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type Props = {
  block: ArticleImageBlock;
  className?: string;
};

export const ArticleImageBlockComponent = (props: Props) => {
  const { block, className } = props;
  return (
    <div
      className={classNames(styles.wrapper, {}, [className])}
    >
      <img src={block.src} className={styles.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};
