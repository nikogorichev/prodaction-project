import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import styles from "./SidebarItem.module.scss";
import { SidebarItemType } from "widgets/Sidebar/model/items";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={styles.item}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{item.text}</span>
    </AppLink>
  );
};
