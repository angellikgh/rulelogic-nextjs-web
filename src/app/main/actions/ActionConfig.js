import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ActionType = lazy(() => import('./action-type'));
const ActionEdit = lazy(() => import('./action-edit'));

const ActionConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'actions',
      element: null,
    },
    {
      path: 'actions/types',
      element: <ActionType />,
    },
    {
      path: 'actions/edit/:type/:actionId',
      element: <ActionEdit />,
    },
    {
      path: 'actions',
      element: <Navigate to="actions" />,
    },
  ],
};

export default ActionConfig;
