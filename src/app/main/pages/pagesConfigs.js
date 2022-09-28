import maintenancePageConfig from './maintenance/maintenancePageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import searchPagesConfig from './search/searchPagesConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  errorPagesConfig,
  maintenancePageConfig,
  activitiesPageConfig,
  searchPagesConfig,
];

export default pagesConfigs;
