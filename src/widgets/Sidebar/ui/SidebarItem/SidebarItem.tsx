import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import styles from "./SidebarItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "@/widgets/Sidebar/model/types/Sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }
  
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{item.text}</span>
    </AppLink>
  );
};
