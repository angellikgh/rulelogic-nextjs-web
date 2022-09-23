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
import FuseUtils from '@fuse/utils';
import ActionsTableHead from './ActionsTableHead';
import ActionsTableRow from './ActionsTableRow';
import ActionService from 'services/actions';
import { selectActionsSearchText } from '../store/actionsSlice';

const defaultLimit = 40;

function ActionsTable({ onChangeCount }) {
  const keyword = useSelector(selectActionsSearchText);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);
  const [selected, setSelected] = useState([]);
  const [actions, setActions] = useState([]);
  const [searchKey, setSearchKey] = useState(keyword);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    if (loading) {
      loadActions();
    }
  }, [loading, loadActions]);

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
    setActions([]);
  }, [searchKey, keyword]);

  const loadActions = _.debounce(() => {
    ActionService.getActions({ skip, limit, keyword })
      .then((res) => {
        setLoading(false);
        setActions([...actions, ...res.actionsList]);
        setCount(count + res.actionsList.length);
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
    Router.push(`/actions/edit/${type}/${recordpk}`);
  }

  const handleShowMore = useCallback(() => {
    setLoading(true);
    setSkip(count);
  }, [count]);

  const handleFavorite = useCallback(
    (id, flag) => () => {
      ActionService.associateParty(id, 'favorite', flag).then(
        ({ responsestatus }) => {
          const changed = actions.map((action) => {
            if (action.recordpk !== id) return action;

            action.info.hasviewerfavouritedrecord = responsestatus.status
              ? true
              : false;

            return action;
          });

          setActions(changed);
        }
      );
    },
    [actions]
  );

  const handleSubscribe = useCallback(
    (id, flag) => () => {
      ActionService.associateParty(id, 'subscribe', flag).then(
        ({ responsestatus }) => {
          const changed = actions.map((action) => {
            if (action.recordpk !== id) return action;

            action.info.hasviewersubscribed = responsestatus.status
              ? true
              : false;

            return action;
          });

          setActions(changed);
        }
      );
    },
    [actions]
  );

  const handleChangeStatus = useCallback(
    (id, flag) => () => {
      ActionService.pushStatus(id, flag).then(({ responsestatus }) => {
        const changed = actions.map((action) => {
          if (action.recordpk !== id) return action;

          action.recordstatus = responsestatus.status ? true : false;

          return action;
        });

        setActions(changed);
      });
    },
    [actions]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (actions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no actions!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <ActionsTableHead
            onRequestSort={handleRequestSort}
            rowCount={actions.length}
            order={order}
          />

          <TableBody>
            {actions.map((action) => {
              const isSelected = selected.indexOf(action.recordpk) !== -1;
              return (
                <ActionsTableRow
                  key={action.recordpk}
                  action={action}
                  onClick={handleClick}
                  onFavorite={handleFavorite(
                    action.recordpk,
                    !action.info.hasviewerfavouritedrecord
                  )}
                  onSubscribe={handleSubscribe(
                    action.recordpk,
                    !action.info.hasviewersubscribed
                  )}
                  onStart={handleChangeStatus(
                    action.recordpk,
                    !action.recordstatus
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

export default ActionsTable;
