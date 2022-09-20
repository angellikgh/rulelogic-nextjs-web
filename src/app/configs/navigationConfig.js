import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'pages',
    title: 'Pages',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'PAGES',
    children: [
      {
        id: 'pages.dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'heroicons-outline:home',
        url: '/dashboard',
      },
      {
        id: 'pages.events',
        title: 'Events',
        type: 'item',
        icon: 'heroicons-outline:bell',
        url: '/events',
      },
      {
        id: 'pages.rules',
        title: 'Rules',
        type: 'item',
        icon: 'heroicons-outline:check-circle',
        url: '/rules',
      },
      {
        id: 'pages.actions',
        title: 'Actions',
        type: 'item',
        icon: 'heroicons-outline:chat-alt',
        url: '/actions',
      },
    ],
  },
];

export default navigationConfig;
