const RuleTypes = [
  {
    order: 1,
    title: 'Temporal',
    description:
      'Create Rules based on flexible date and time.  For example Mondays at 4am in March',
    icon: 'assets/img/timetable.png',
    enabled: true,
  },
  {
    order: 2,
    title: 'Weather',
    description:
      'Define Rules based on Weather, such as Clear Day with temperatures over 30c',
    icon: 'assets/img/cloudy.png',
    enabled: true,
  },
  {
    order: 3,
    title: 'Shares',
    description:
      'Create Rules based on share price movement.  For example, Apple shares above US 300 dollars.',
    icon: 'assets/img/profits.png',
    enabled: true,
  },
  {
    order: 4,
    title: 'API',
    description: 'Create Rules based on results of API calls to other systems.',
    icon: 'assets/img/api.png',
    enabled: false,
  },
  {
    order: 5,
    title: 'Google Ads',
    description:
      'Create Rules based on Google Ads analytics, for example when a Google Ads campaign click rate falls below 30 clicks per day',
    icon: 'assets/img/adwords.png',
    enabled: false,
  },
  {
    order: 6,
    title: 'Web Link',
    description: 'Allow a web link to activate a rule',
    icon: 'assets/img/website.png',
    enabled: false,
  },
  {
    order: 7,
    title: 'News',
    description: 'Create Rules based on news events',
    icon: 'assets/img/news.png',
    enabled: false,
  },
  {
    order: 8,
    title: 'Salesforce Lead Action',
    description: 'Create Rules whenever a Lead is generated',
    icon: 'assets/img/salesforce.png',
    enabled: false,
  },
];

export default RuleTypes;
