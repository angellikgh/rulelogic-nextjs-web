import { useState } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import ActionsHeader from './ActionsHeader';
import ActionsTable from './ActionsTable';

function ActionList() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [totalCount, setTotalCount] = useState(0);

  const handleChangeCount = (count) => setTotalCount(count);

  return (
    <FusePageCarded
      header={<ActionsHeader countActions={totalCount} />}
      content={<ActionsTable onChangeCount={handleChangeCount} />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('action', reducer)(ActionList);
