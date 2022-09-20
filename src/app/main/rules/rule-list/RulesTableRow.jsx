import Image from 'next/image';
import { Avatar, Checkbox, TableCell, TableRow } from '@mui/material';
import { RuleType } from 'utils/rule_pb';
import { findKey } from 'lodash';

const RulesTableRow = ({ rule, handleClick }) => {
  const {
    title,
    description,
    enabled,
    info,
    ownerparty,
    recordtype,
    unitprice,
    pricecurrency,
    onClick,
    onFavorite,
    onSubscribe,
    onStart,
    icon,
    ...props
  } = rule;
  const isSelected = false;
  const strRecordType = findKey(RuleType, function (v) {
    return v === recordtype;
  });
  const ownerName =
    ownerparty.company || `${ownerparty.firstname} ${ownerparty.lastname}`;
  return (
    <TableRow
      className="h-60 cursor-pointer"
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={rule.recordpk}
      selected={isSelected}
      onClick={(ev) => handleClick(rule.recordpk, strRecordType.toLowerCase())}
    >
      <TableCell className="w-36 md:w-48 text-center" padding="none">
        <Checkbox
          checked={isSelected}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => handleCheck(event, rule.recordpk)}
        />
      </TableCell>

      <TableCell className="p-1 md:p-12" component="th" scope="row">
        {icon ? (
          <Image alt={title} src={`/${icon}`} width={64} height={64} />
        ) : (
          <Avatar
            sx={{
              width: 48,
              height: 48,
              backgroundColor: info.recordtitlecolor || red[500],
            }}
          >
            {info.recordtitlefirstletter}
          </Avatar>
        )}
      </TableCell>

      <TableCell className="p-8 md:p-12" component="th" scope="row">
        {title}
      </TableCell>

      <TableCell
        className="p-4 md:p-8 min-h-72 flex flex-col justify-center"
        component="th"
        scope="row"
        sx={{
          border: 'none',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description.length > 80
          ? `${description.slice(0, 80)}...`
          : description}
      </TableCell>

      <TableCell className="p-4 md:p-8" component="th" scope="row">
        {ownerName && `By ${ownerName} (${strRecordType})`}
      </TableCell>

      <TableCell
        className="p-2 md:p-16"
        component="th"
        scope="row"
        align="right"
      >
        {!!unitprice ? `${unitprice} ${pricecurrency}` : `Free`}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row"></TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row"></TableCell>
    </TableRow>
  );
};

export default RulesTableRow;
