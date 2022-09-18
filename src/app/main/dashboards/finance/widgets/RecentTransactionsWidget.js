import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { selectWidgets } from '../store/widgetsSlice';

function RecentTransactionsWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { columns, rows } = widgets?.recentTransactions;

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
      <div className="">
        <Typography className="mr-16 text-lg font-medium tracking-tight leading-6 truncate">
          Recent transactions
        </Typography>
        <Typography className="font-medium" color="text.secondary">
          1 pending, 4 completed
        </Typography>
      </div>

      <div className="table-responsive mt-24">
        <Table className="simple w-full min-w-full">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>
                  <Typography
                    color="text.secondary"
                    className="font-semibold text-12 whitespace-nowrap"
                  >
                    {column}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {Object.entries(row).map(([key, value]) => {
                  switch (key) {
                    case 'id': {
                      return (
                        <TableCell key={key} component="th" scope="row">
                          <Typography className="" color="text.secondary">
                            {value}
                          </Typography>
                        </TableCell>
                      );
                    }
                    case 'date': {
                      return (
                        <TableCell key={key} component="th" scope="row">
                          <Typography className="">
                            {format(new Date(value), 'MMM dd, y')}
                          </Typography>
                        </TableCell>
                      );
                    }
                    case 'amount': {
                      return (
                        <TableCell key={key} component="th" scope="row">
                          <Typography className="">
                            {value.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })}
                          </Typography>
                        </TableCell>
                      );
                    }
                    case 'status': {
                      return (
                        <TableCell key={key} component="th" scope="row">
                          <Typography
                            className={clsx(
                              'inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase',
                              value === 'pending' &&
                                'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50',
                              value === 'completed' &&
                                'bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50'
                            )}
                          >
                            {value}
                          </Typography>
                        </TableCell>
                      );
                    }
                    default: {
                      return (
                        <TableCell key={key} component="th" scope="row">
                          <Typography className="">{value}</Typography>
                        </TableCell>
                      );
                    }
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="pt-24">
          <Button variant="outlined">See all transactions</Button>
        </div>
      </div>
    </Paper>
  );
}

export default memo(RecentTransactionsWidget);
