import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
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

import RuleEditHeader from './RuleEditHeader';
import TemporalForm from './forms/TemporalForm';
import WeatherForm from './forms/WeatherForm';
import SharePriceForm from './forms/SharePriceForm';
import RuleService from 'services/rules';

function RuleEdit(props) {
  const formRef = useRef(null);
  const router = useRouter();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { type, ruleId } = router.query;
  const [loading, setLoading] = useState(false);
  const [rule, setRule] = useState({});
  const [noProduct, setNoProduct] = useState(false);
  const [notification, setNotification] = useState({
    severity: 'success',
    vertical: 'bottom',
    horizontal: 'center',
    autoHideDuration: 5000,
    open: false,
    message: '',
  });

  const handleNotify = useCallback(
    (options) => {
      setNotification({
        ...notification,
        ...options,
        open: true,
      });
    },
    [notification]
  );

  const handleClose = useCallback(
    (event, reason) => {
      setNotification({
        ...notification,
        open: false,
      });
    },
    [notification]
  );

  useEffect(() => {
    if (type && ruleId && ruleId !== 'new') {
      setLoading(true);
      RuleService.getRule(ruleId)
        .then(({ rule }) => {
          setLoading(false);
          setRule({
            ...rule[type],
            ...pick(rule, [
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
            ...pick(rule.location, ['locationcity', 'locationcountry']),
          });
        })
        .catch(() => setLoading(false));
    }

    if (!ruleId || ruleId === 'new') {
      setLoading(false);
    }
  }, [type, ruleId]);

  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such product!
        </Typography>
        <Button
          className="mt-24"
          variant="outlined"
          onClick={() => {}}
          color="inherit"
        >
          Go to Rules Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (loading && ruleId !== rule.recordpk && ruleId !== 'new') {
    return <FuseLoading />;
  }

  return (
    <FormProvider>
      <FusePageCarded
        header={<RuleEditHeader type={type} formRef={formRef} rule={rule} />}
        content={
          <>
            {type === 'temporal' && (
              <TemporalForm formRef={formRef} rule={rule} />
            )}
            {type === 'weather' && (
              <WeatherForm formRef={formRef} rule={rule} />
            )}
            {type === 'shares' && (
              <SharePriceForm formRef={formRef} rule={rule} />
            )}
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('eCommerceApp', reducer)(RuleEdit);
