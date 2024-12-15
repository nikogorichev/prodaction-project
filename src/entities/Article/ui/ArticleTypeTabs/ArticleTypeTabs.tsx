import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/types/article";
import styles from "./ArticleTypeTabs.module.scss";

const typeTabs: TabItem<ArticleType>[] = [
    {
      value: ArticleType.ALL,
      content: "Все статьи",
    },
    {
      value: ArticleType.ECONOMICS,
      content: "Экономика",
    },
    {
      value: ArticleType.IT,
      content: "Ай-Ти",
    },
    {
      value: ArticleType.SCIENCE,
      content: "Наука",
    },
  ];

type Props = {
    value: ArticleType;
  onChangeType: (newType: TabItem<ArticleType>) => void;
};

export const ArticleTypeTabs = (props: Props) => {
  const { value, onChangeType } = props;
  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onChangeType}
      className={styles.tabs}
    />
  );
};
