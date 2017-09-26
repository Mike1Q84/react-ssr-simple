import DevOpsPage from './DevOps/DevOpsPage';
import SysAdminPage from './SysAdmin/SysAdminPage';

const routes = [
  {path: "/:lang/service/devops", component: DevOpsPage, exact: true},
  {path: "/:lang/service/sysadmin", component: SysAdminPage, exact: true}
]

export default routes;
