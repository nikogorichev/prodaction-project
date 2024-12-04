import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRouterProps,
  routerConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import RequireAuth from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = (route: AppRouterProps) => {
    const { path, element, authOnly } = route;
    const page = <>{element}</>;
    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{page}</RequireAuth> : page}
      />
    );
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
