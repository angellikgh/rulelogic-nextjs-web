import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const EventEdit = lazy(() => import('./event-edit'));

const EventConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'events',
      element: null,
    },
    {
      path: 'events/edit/:eventId',
      element: <EventEdit />,
    },
    {
      path: 'events',
      element: <Navigate to="events" />,
    },
  ],
};

export default EventConfig;
