import { FaHome } from "react-icons/fa";
import Login from "./User/Login";

const RouteConfig = [
 {
    name: 'Login',
    locale: 'user.login',
    path: './User/Login',
    component: './User/Login',
    hideInMenu: true,
 },
    {
    path: '/dashboard',
    locale: 'dashboard',
    name: 'Dashboard',
    icon: <FaHome />,
    exact: true, // This route will only work for /dashboard . For/dashboard/analysis or other this component will not be rendered
    component: 'pages/dashboard',
    subRoutes: [
    {
        path: '/dashboard/analysis',
        locale: 'dashboard.analysis',
        name: 'analysis',
        component: 'pages/dashboard/analysis',
        exact: true,
        accessTO: ['admin'] // Allow only admins to view this menu and access this page
    },
    {
    path: '/dashboard/monitor',
    locale: 'dashboard.monitor',
    component: 'pages/dashboard/monitor',
    name: 'monitor',
    exact: true,
    },
    {
        path: '/dashboard/workplace',
        locale: 'dashboard.workplace',
        component: 'pages/dashboard/workplace',
        name: 'workplace',
        exact: true,
  },
]
},
{
    path: '/projects',
    locale: 'projects',
    name: 'Projects',
    icon: <FaHome />,
    redirect: '/projects/list', //Redirect /projects to/projects/list
    subRoutes: [ 
        {
        path: '/projects/list',
        locale: 'projects.list',
        name: 'Projects',
        icon: <FaHome />,
        exact: true,
        }, 
        {
        path: '/projects/:id',
        locale: 'projects.details',
        name: 'Project Details',
        hideInMenu: true,
        icon: <FaHome />,
        key: 'projects',
        exact: true,
        },
        {
            path: '/projects/:id/settings',
            locale: 'projects.settings',
            icon: <FaHome />,
            name: 'Settings',
            parentKey: 'details',
            exact: true,
            },
        ],
    },
    {
    path: '*',
    component: './404',
    },
]

export default RouteConfig;