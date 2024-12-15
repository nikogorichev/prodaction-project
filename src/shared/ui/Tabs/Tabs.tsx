import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export type TabItem<T> = {
  value: T;
  content: ReactNode;
};

type Props<T> = {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
};

export const Tabs = <T extends string>(props: Props<T>) => {
  const { className, tabs, onTabClick, value } = props;

  const onChangeTab = (tab: TabItem<T>) => () => {
    if (value !== tab.value) {
      onTabClick(tab);
    }
  };

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={styles.tab}
          key={tab.value}
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={onChangeTab(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
