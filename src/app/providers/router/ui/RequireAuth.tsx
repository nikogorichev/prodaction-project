import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
