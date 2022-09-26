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

import ActionEditHeader from './ActionEditHeader';
import EmailForm from './forms/EmailForm';
import SmsForm from './forms/SmsForm';
import VoiceMessageForm from './forms/VoiceMessageForm';
import NotificationForm from './forms/NotificationForm';
import ActionService from 'services/actions';
import reducer from '../store';
import { ActionType } from 'utils/action_pb';
import ActionTypes from 'src/constants/ActionTypes';

function ActionEdit(props) {
  const formRef = useRef(null);
  const router = useRouter();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { type, actionId } = router.query;
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState({});
  const [typeId, setTypeId] = useState('');
  const [strType, setStrType] = useState('');

  useEffect(() => {
    if (type !== undefined) {
      const key = _.findKey(
        ActionType,
        (v) => v === parseInt(type)
      ).toLowerCase();

      setTypeId(key);

      const title = _.get(
        _.find(ActionTypes, (v) => v.id === parseInt(type)),
        'title'
      );

      setStrType(title);
    }
  }, [type]);

  useEffect(() => {
    if (typeId && actionId && actionId !== 'new') {
      setLoading(true);
      ActionService.getAction(actionId)
        .then(({ action }) => {
          setLoading(false);

          setAction({
            ...action[typeId],
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

    if (actionId === 'new') {
      setLoading(false);
    }
  }, [actionId, typeId]);

  if (loading && actionId !== 'new') {
    return <FuseLoading />;
  }

  if (!loading && !action.recordpk && actionId !== 'new') {
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
          onClick={() => router.push('/actions')}
          color="inherit"
        >
          Go to Actions Page
        </Button>
      </motion.div>
    );
  }

  return (
    <FormProvider>
      <FusePageCarded
        header={
          <ActionEditHeader title={strType} formRef={formRef} action={action} />
        }
        content={
          <>
            {parseInt(type) === ActionType.EMAIL && (
              <EmailForm formRef={formRef} action={action} />
            )}
            {parseInt(type) === ActionType.SMS && (
              <SmsForm formRef={formRef} action={action} />
            )}
            {parseInt(type) === ActionType.VOICE && (
              <VoiceMessageForm formRef={formRef} action={action} />
            )}
            {parseInt(type) === ActionType.NOTIFICATION && (
              <NotificationForm formRef={formRef} action={action} />
            )}
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('eCommerceApp', reducer)(ActionEdit);
