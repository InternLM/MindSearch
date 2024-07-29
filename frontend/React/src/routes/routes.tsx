import RenderTest from "@/pages/render";

import { ReactElement } from "react";
import { Navigate, useRoutes } from "react-router-dom";

interface RouteItem {
  path: string;
  needLogin?: boolean;
  element: ReactElement;
}

const routes: RouteItem[] = [
  {
    path: "/",
    needLogin: false,
    element: <RenderTest />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const WrapperRoutes = () => {
  return useRoutes(
    routes.map((item: RouteItem) => {
      if (item.needLogin) {
        return {
          ...item,
          element: <></>,
        };
      }
      return item;
    }),
  );
};

export default WrapperRoutes;
