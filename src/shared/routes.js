import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';

const routes = [
  {path: "/:lang/", component: HomePage, exact: true},
  {path: "/:lang/about", component: AboutPage}
];

export default routes;
