import { classNames } from "shared/lib/classNames/classNames";
import styles from "./sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import React from "react";
import { Button } from "shared/ui/Button/Buttons";

type SidebarProps = { className?: string };

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className={styles.switchers}>
        <LangSwitcher className={styles.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
