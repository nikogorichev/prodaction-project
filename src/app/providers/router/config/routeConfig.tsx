import { UserRole } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RoutePath } from "@/shared/const/router";
import { RouteProps } from "react-router-dom";

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
  roles?: Array<UserRole>;
};

export const routerConfig: AppRouterProps[] = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> },
  { path: `${RoutePath.profile}:id`, element: <ProfilePage />, authOnly: true },
  { path: RoutePath.articles, element: <ArticlesPage />, authOnly: true },
  {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  { path: RoutePath.forbidden, element: <ForbiddenPage /> },
  { path: RoutePath.not_found, element: <NotFoundPage /> },
];
