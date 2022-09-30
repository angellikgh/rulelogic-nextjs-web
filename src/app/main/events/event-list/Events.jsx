import { useState } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import EventsHeader from './EventsHeader';
import EventsTable from './EventsTable';

function EventList() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [totalCount, setTotalCount] = useState(0);

  const handleChangeCount = (count) => setTotalCount(count);

  return (
    <FusePageCarded
      header={<EventsHeader countEvents={totalCount} />}
      content={<EventsTable onChangeCount={handleChangeCount} />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('event', reducer)(EventList);
