import withReducer from 'app/store/withReducer';
import _ from 'lodash';
import FusePageSimple from '@fuse/core/FusePageSimple';
import reducer from './store';
import AnalyticsDashboardAppHeader from './AnalyticsDashboardAppHeader';

function AnalyticsDashboardApp() {
  return <FusePageSimple header={<AnalyticsDashboardAppHeader />} />;
}

export default AnalyticsDashboardApp;
