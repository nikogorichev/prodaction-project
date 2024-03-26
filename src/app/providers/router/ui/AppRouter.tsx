import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routerConfig.map(({ path, element }) => {
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
