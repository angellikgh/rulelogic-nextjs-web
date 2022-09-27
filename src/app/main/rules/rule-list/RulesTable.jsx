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
import RulesTableHead from './RulesTableHead';
import RulesTableRow from './RulesTableRow';
import RuleService from 'services/rules';
import { selectRulesSearchText } from '../store/rulesSlice';

const defaultLimit = 40;

function RulesTable({ onChangeCount }) {
  const keyword = useSelector(selectRulesSearchText);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);
  const [selected, setSelected] = useState([]);
  const [rules, setRules] = useState([]);
  const [searchKey, setSearchKey] = useState(keyword);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    if (loading) {
      loadRules();
    }
  }, [loading, loadRules]);

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
    setRules([]);
  }, [searchKey, keyword]);

  const loadRules = _.debounce(() => {
    RuleService.getRules({ skip, limit, keyword })
      .then((res) => {
        setLoading(false);
        setRules([...rules, ...res.rulesList]);
        setCount(count + res.rulesList.length);
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
    Router.push(`/rules/edit/${type}/${recordpk}`);
  }

  const handleShowMore = useCallback(() => {
    setLoading(true);
    setSkip(count);
  }, [count]);

  const handleFavorite = useCallback(
    (id, flag) =>
      _.debounce(() => {
        RuleService.associateParty(id, 'favorite', flag).then(
          ({ responsestatus }) => {
            const changed = rules.map((rule) => {
              if (rule.recordpk !== id) return rule;

              rule.info.hasviewerfavouritedrecord = responsestatus.status
                ? true
                : false;

              return rule;
            });

            setRules(changed);
          }
        );
      }, 100),
    [rules]
  );

  const handleSubscribe = useCallback(
    (id, flag) => () => {
      RuleService.associateParty(id, 'subscribe', flag).then(
        ({ responsestatus }) => {
          const changed = rules.map((rule) => {
            if (rule.recordpk !== id) return rule;

            rule.info.hasviewersubscribed = responsestatus.status
              ? true
              : false;

            return rule;
          });

          setRules(changed);
        }
      );
    },
    [rules]
  );

  const handleChangeStatus = useCallback(
    (id, flag) => () => {
      RuleService.pushStatus(id, flag).then(({ responsestatus }) => {
        const changed = rules.map((rule) => {
          if (rule.recordpk !== id) return rule;

          rule.recordstatus = responsestatus.status ? true : false;

          return rule;
        });

        setRules(changed);
      });
    },
    [rules]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (rules.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no rules!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <RulesTableHead
            onRequestSort={handleRequestSort}
            rowCount={rules.length}
            order={order}
          />

          <TableBody>
            {rules.map((rule) => {
              const isSelected = selected.indexOf(rule.recordpk) !== -1;
              return (
                <RulesTableRow
                  key={rule.recordpk}
                  rule={rule}
                  onClick={handleClick}
                  onFavorite={handleFavorite(
                    rule.recordpk,
                    !rule.info.hasviewerfavouritedrecord
                  )}
                  onSubscribe={handleSubscribe(
                    rule.recordpk,
                    !rule.info.hasviewersubscribed
                  )}
                  onStart={handleChangeStatus(
                    rule.recordpk,
                    !rule.recordstatus
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

export default RulesTable;
