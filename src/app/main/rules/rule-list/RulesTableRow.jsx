import { Checkbox, TableCell, TableRow } from '@mui/material';

const RulesTableRow = ({ n }) => {
  const isSelected = false;

  return (
    <TableRow
      className="h-72 cursor-pointer"
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={n.id}
      selected={isSelected}
      onClick={(event) => handleClick(n)}
    >
      <TableCell className="w-40 md:w-64 text-center" padding="none">
        <Checkbox
          checked={isSelected}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => handleCheck(event, n.id)}
        />
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row">
        {n.id}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row">
        {n.reference}
      </TableCell>

      <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
        {`${n.customer.firstName} ${n.customer.lastName}`}
      </TableCell>

      <TableCell
        className="p-4 md:p-16"
        component="th"
        scope="row"
        align="right"
      >
        <span>$</span>
        {n.total}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row">
        {n.payment.method}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row"></TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row">
        {n.date}
      </TableCell>
    </TableRow>
  );
};

export default RulesTableRow;
