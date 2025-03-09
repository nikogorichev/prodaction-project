import { getUserAuthData, getUserRoles, UserRole } from "entities/User";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

type Props = {
  children: JSX.Element;
  roles?: Array<UserRole>;
};

const RequireAuth = (props: Props) => {
  const { children, roles } = props;
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiresRoles = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiresRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
