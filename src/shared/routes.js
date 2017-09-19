import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';
import NotFoundPage from './containers/404/NotFoundPage';

const routes = [
  {path: "/", component: HomePage, exact: true},
  {path: "/:lang", component: HomePage, exact: true},
  {path: "/:lang/", component: HomePage, exact: true},
  {path: "/:lang/about", component: AboutPage},
  {path: "/:lang/404", component: NotFoundPage},
  {path: "/:lang/*", component: NotFoundPage},
  // {path: "*", component: NotFoundPage}
  {path: "*", component: HomePage}
];

export default routes;
