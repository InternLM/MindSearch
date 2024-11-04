import MindSearchCon from '@/pages/mindsearch';
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
    element: <MindSearchCon />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const WrapperRoutes = () => {
  return useRoutes(
    routes.map((item: RouteItem) => {
      return item;
    }),
  );
};

export default WrapperRoutes;
