import { useRouter } from 'next/router';
import { useRef } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { FormProvider } from 'react-hook-form';
import reducer from '../store';

import ActionEditHeader from './ActionEditHeader';
import TemporalForm from './forms/TemporalForm';
import WeatherForm from './forms/WeatherForm';
import SharePriceForm from './forms/SharePriceForm';
import ActionService from 'services/actions';

function ActionEdit(props) {
  const formRef = useRef(null);
  const router = useRouter();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { type, actionId } = router.query;
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState({});
  const [noProduct, setNoProduct] = useState(false);

  useEffect(() => {
    if (type && actionId && actionId !== 'new') {
      setLoading(true);
      ActionService.getAction(actionId)
        .then(({ action }) => {
          setLoading(false);

          setAction({
            ...action[type],
            ..._.pick(action, [
              'recordpk',
              'partypk',
              'title',
              'description',
              'city',
              'country',
              'pricecurrency',
              'unitprice',
              'recordenabled',
              'visibility',
            ]),
            ..._.pick(action.location, ['locationcity', 'locationcountry']),
            ..._.pick(action.ownerparty, ['company', 'firstname', 'lastname']),
          });
        })
        .catch(() => setLoading(false));
    }

    if (!actionId || actionId === 'new') {
      setLoading(false);
    }
  }, [type, actionId]);

  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such action!
        </Typography>
        <Button
          className="mt-24"
          variant="outlined"
          onClick={() => {}}
          color="inherit"
        >
          Go to Actions Page
        </Button>
      </motion.div>
    );
  }

  if (loading && actionId !== action.recordpk && actionId !== 'new') {
    return <FuseLoading />;
  }

  return (
    <FormProvider>
      <FusePageCarded
        header={
          <ActionEditHeader type={type} formRef={formRef} action={action} />
        }
        content={
          <>
            {type === 'temporal' && (
              <TemporalForm formRef={formRef} action={action} />
            )}
            {type === 'weather' && (
              <WeatherForm formRef={formRef} action={action} />
            )}
            {type === 'shares' && (
              <SharePriceForm formRef={formRef} action={action} />
            )}
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('eCommerceApp', reducer)(ActionEdit);
