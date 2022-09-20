import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const RuleList = lazy(() => import('./RuleList'));
const RuleType = lazy(() => import('./rule-type'));
const RuleEdit = lazy(() => import('./RuleEdit'));

const RuleConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'rules',
      element: null, //<RuleList />,
    },
    {
      path: 'rules/types',
      element: <RuleType />,
    },
    {
      path: 'rules/edit/:type/:ruleId',
      element: <RuleEdit />,
    },
    {
      path: 'rules',
      element: <Navigate to="rules" />,
    },
  ],
};

export default RuleConfig;
