import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectWidgets } from '../store/widgetsSlice';

function CurrentStatementWidget() {
  const widgets = useSelector(selectWidgets);
  const { status, date, limit, spent, minimum } = widgets?.currentStatement;

  return (
    <Paper className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
            Current Statement
          </Typography>
          {status === 'paid' && (
            <Typography className="text-green-600 font-medium text-sm">Paid on {date}</Typography>
          )}
          {status === 'pending' && (
            <Typography className="text-red-600 font-medium text-sm">
              Must be paid before {date}
            </Typography>
          )}
        </div>
        <div className="-mt-8">
          <IconButton aria-label="more" size="large">
            <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
          </IconButton>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-16 -mx-24">
        <div className="flex flex-col mx-24 my-12">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
            Card Limit
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            {limit.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </div>
        <div className="flex flex-col mx-24 my-12">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
            Spent
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            {spent.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </div>
        <div className="flex flex-col mx-24 my-12">
          <Typography color="text.secondary" className="text-sm font-medium leading-none">
            Minimum
          </Typography>
          <Typography className="mt-8 font-medium text-3xl leading-none">
            {minimum.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </div>
      </div>

      <div className="absolute bottom-0 ltr:right-0 rtl:left-0 w-96 h-96 -m-24">
        {status === 'paid' && (
          <FuseSvgIcon size={96} className="opacity-25 text-green-500 dark:text-green-400">
            heroicons-outline:check-circle
          </FuseSvgIcon>
        )}

        {status === 'pending' && (
          <FuseSvgIcon size={96} className="opacity-25 text-red-500 dark:text-red-400">
            heroicons-outline:exclamation-circle
          </FuseSvgIcon>
        )}
      </div>
    </Paper>
  );
}

export default memo(CurrentStatementWidget);
