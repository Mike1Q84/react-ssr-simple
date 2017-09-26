import HomePage from './containers/Home/HomePage';
import ServicesPage from './containers/Services/ServicesPage';
import DevOpsPage from './containers/Services/DevOps/DevOpsPage';
import SysAdminPage from './containers/Services/SysAdmin/SysAdminPage';
import WebDesignPage from './containers/Services/WebDesign/WebDesignPage';
import AboutPage from './containers/About/AboutPage';
import NotFoundPage from './containers/404/NotFoundPage';

const routes = [
  {path: "/", component: HomePage, exact: true},
  {path: "/:lang/", component: HomePage, exact: true},
  {path: "/:lang/home", component: HomePage, exact: true},
  {path: "/:lang/services", component: ServicesPage, exact: true},
  {path: "/:lang/service/devops", component: DevOpsPage, exact: true},
  {path: "/:lang/service/sysadmin", component: SysAdminPage, exact: true},
  {path: "/:lang/service/webdesign", component: WebDesignPage, exact: true},
  {path: "/:lang/about", component: AboutPage, exact: true},
  {path: "/:lang/404", component: NotFoundPage, exact: true},
  {path: "*", component: NotFoundPage}
];

export default routes;
