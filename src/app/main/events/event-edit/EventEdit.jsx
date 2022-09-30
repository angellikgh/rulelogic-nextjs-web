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

import EventEditHeader from './EventEditHeader';
import EditForm from './forms/EditForm';
import EventService from 'services/events';
import reducer from '../store';

function EventEdit(props) {
  const formRef = useRef(null);
  const router = useRouter();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { type, eventId } = router.query;
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  useEffect(() => {
    if (eventId && eventId !== 'new') {
      setLoading(true);
      EventService.getEvent(eventId)
        .then(({ event }) => {
          setLoading(false);

          setEvent({
            ..._.pick(event, [
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
            ..._.pick(event.location, ['locationcity', 'locationcountry']),
            ..._.pick(event.ownerparty, ['company', 'firstname', 'lastname']),
          });
        })
        .catch(() => setLoading(false));
    }

    if (eventId === 'new') {
      setLoading(false);
    }
  }, [eventId, type]);

  if (loading && eventId !== 'new') {
    return <FuseLoading />;
  }

  if (!loading && !event.recordpk && eventId !== 'new') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such event!
        </Typography>
        <Button
          className="mt-24"
          variant="outlined"
          onClick={() => router.push('/events')}
          color="inherit"
        >
          Go to Events Page
        </Button>
      </motion.div>
    );
  }

  return (
    <FormProvider>
      <FusePageCarded
        header={<EventEditHeader formRef={formRef} event={event} />}
        content={<EditForm formRef={formRef} event={event} />}
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('eCommerceApp', reducer)(EventEdit);
