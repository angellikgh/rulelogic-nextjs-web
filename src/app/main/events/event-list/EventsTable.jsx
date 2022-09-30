import Router from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

import FuseLoading from '@fuse/core/FuseLoading';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import EventsTableHead from './EventsTableHead';
import EventsTableRow from './EventsTableRow';
import EventService from 'services/events';
import { selectEventsSearchText } from '../store/eventsSlice';

const defaultLimit = 40;

function EventsTable({ onChangeCount }) {
  const keyword = useSelector(selectEventsSearchText);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);
  const [events, setEvents] = useState([]);
  const [searchKey, setSearchKey] = useState(keyword);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    if (loading) {
      loadEvents();
    }
  }, [loading, loadEvents]);

  useEffect(() => {
    onChangeCount(count);
  }, [count, onChangeCount]);

  useEffect(() => {
    if (searchKey === keyword) return;

    setSearchKey(keyword);
    setLoading(true);
    setSkip(0);
    setCount(0);
    setLimit(defaultLimit);
    setEvents([]);
  }, [searchKey, keyword]);

  const loadEvents = _.debounce(() => {
    EventService.getEvents({ skip, limit, keyword })
      .then((res) => {
        setLoading(false);
        setEvents([...events, ...res.eventsList]);
        setCount(count + res.eventsList.length);
      })
      .catch(() => setLoading(false));
  }, 1000);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id,
    });
  }

  function handleClick(recordpk, type) {
    Router.push(`/events/edit/${type}/${recordpk}`);
  }

  const handleShowMore = useCallback(() => {
    setLoading(true);
    setSkip(count);
  }, [count]);

  const handleFavorite = useCallback(
    (id, flag) =>
      _.debounce(() => {
        EventService.associateParty(id, 'favorite', flag).then(
          ({ responsestatus }) => {
            const changed = events.map((event) => {
              if (event.recordpk !== id) return event;

              event.info.hasviewerfavouritedrecord = responsestatus.status
                ? true
                : false;

              return event;
            });

            setEvents(changed);
          }
        );
      }, 100),
    [events]
  );

  const handleSubscribe = useCallback(
    (id, flag) => () => {
      EventService.associateParty(id, 'subscribe', flag).then(
        ({ responsestatus }) => {
          const changed = events.map((event) => {
            if (event.recordpk !== id) return event;

            event.info.hasviewersubscribed = responsestatus.status
              ? true
              : false;

            return event;
          });

          setEvents(changed);
        }
      );
    },
    [events]
  );

  const handleChangeStatus = useCallback(
    (id, flag) => () => {
      EventService.pushStatus(id, flag).then(({ responsestatus }) => {
        const changed = events.map((event) => {
          if (event.recordpk !== id) return event;

          event.recordstatus = responsestatus.status ? true : false;

          return event;
        });

        setEvents(changed);
      });
    },
    [events]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no events!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <EventsTableHead
            onRequestSort={handleRequestSort}
            rowCount={events.length}
            order={order}
          />

          <TableBody>
            {events.map((event) => {
              return (
                <EventsTableRow
                  key={event.recordpk}
                  event={event}
                  onClick={handleClick}
                  onFavorite={handleFavorite(
                    event.recordpk,
                    !event.info.hasviewerfavouritedrecord
                  )}
                  onSubscribe={handleSubscribe(
                    event.recordpk,
                    !event.info.hasviewersubscribed
                  )}
                  onStart={handleChangeStatus(
                    event.recordpk,
                    !event.recordstatus
                  )}
                />
              );
            })}
          </TableBody>
        </Table>

        {count >= skip + limit && (
          <Button variant="outlined" onClick={handleShowMore}>
            Show more
          </Button>
        )}
      </FuseScrollbars>
    </div>
  );
}

export default EventsTable;
