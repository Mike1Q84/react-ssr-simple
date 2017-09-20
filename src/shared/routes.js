import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';
import NotFoundPage from './containers/404/NotFoundPage';

const routes = [
  {path: "/", component: HomePage, exact: true},
  {path: "/:lang/", component: HomePage, exact: true},
  {path: "/:lang/home", component: HomePage, exact: true},
  {path: "/:lang/about", component: AboutPage, exact: true},
  {path: "/:lang/404", component: NotFoundPage},
  {path: "*", component: NotFoundPage}
];

export default routes;
