import { getUserAuthData } from "entities/User";
import { Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return routerConfig.filter((route) => {
      if (route.authOnly && !isAuth) {
        return false
      }
      return true
    });
  }, [isAuth]);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
