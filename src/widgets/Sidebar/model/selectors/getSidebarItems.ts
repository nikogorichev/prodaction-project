import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticlesIcon from "shared/assets/icons/articles-20-20.svg";
import { SidebarItemType } from "../types/Sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    { path: RoutePath.main, text: "Главная", Icon: MainIcon },
    { path: RoutePath.about, text: "О сайте", Icon: AboutIcon },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: "Статьи",
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
