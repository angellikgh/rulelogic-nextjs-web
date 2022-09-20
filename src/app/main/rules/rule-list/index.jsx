import { useState } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import RulesHeader from './RulesHeader';
import RulesTable from './RulesTable';

function RuleList() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [totalCount, setTotalCount] = useState(0);

  const handleChangeCount = (count) => setTotalCount(count);

  return (
    <FusePageCarded
      header={<RulesHeader countRules={totalCount} />}
      content={<RulesTable onChangeCount={handleChangeCount} />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('rule', reducer)(RuleList);
