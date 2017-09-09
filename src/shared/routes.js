import HomePage from './containers/Home/HomePage';
import AboutPage from './containers/About/AboutPage';

const routes = [
  {path: "/", component: HomePage, exact: true},
  {path: "/about", component: AboutPage}
];

export default routes;
