import { lazy } from 'react';

const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/dashboard',
      element: <ProjectDashboardApp />,
    },
  ],
};

export default ProjectDashboardAppConfig;
