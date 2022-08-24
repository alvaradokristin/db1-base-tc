import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Home } from "./components/Home/Home";
import { AddZoo } from "./components/AddZoos/AddZoo";
import ShowZoos from "./components/ShowZoos/ShowZoos";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/add-zoo',
    element: <AddZoo />
  },
  {
    path: '/zoos-info',
    element: <ShowZoos />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
