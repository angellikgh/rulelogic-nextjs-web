import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'heroicons-outline:home',
        url: '/dashboards/project',
      },
      {
        id: 'dashboards.events',
        title: 'Events',
        type: 'item',
        icon: 'heroicons-outline:bell',
        url: 'apps/e-commerce/orders',
      },
      {
        id: 'dashboards.rules',
        title: 'Rules',
        type: 'item',
        icon: 'heroicons-outline:flag',
        url: '/dashboards/analytics',
      },
      {
        id: 'dashboards.actions',
        title: 'Actions',
        type: 'item',
        icon: 'heroicons-outline:chat-alt',
        url: '/dashboards/finance',
      },
    ],
  },
];

export default navigationConfig;
