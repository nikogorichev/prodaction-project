import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Tabs.module.scss";
import { Card } from "../Card/Card";

type TabItem = {
  value: string;
  content: ReactNode;
};

type Props = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
};

export const Tabs = (props: Props) => {
  const { className, tabs, onTabClick, value } = props;

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {tabs.map((tab) => (
        <Card className={styles.tab} key={tab.value}>
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
