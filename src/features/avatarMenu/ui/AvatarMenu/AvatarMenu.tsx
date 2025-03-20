import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Menu } from "shared/ui/Popups";

export const AvatarMenu = () => {
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Menu
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        {
          content: "Профиль",
          href: RoutePath.profile + authData.id,
        },
        { content: "Выйти", onClick: onLogout },
        ...(isAdminPanelAvailable
          ? [{ content: "Админ. панель", href: RoutePath.admin_panel }]
          : []),
      ]}
    />
  );
};
