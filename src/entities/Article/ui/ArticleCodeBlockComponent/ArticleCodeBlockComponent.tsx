import { Code } from "shared/ui/Code/Code";
import { ArticleCodeBlock } from "../../model/types/article";

type Props = {
  block: ArticleCodeBlock;
  className?: string;
};

export const ArticleCodeBlockComponent = (props: Props) => {
  const { block, className } = props;
  return <Code className={className}>{block.code}</Code>;
};
