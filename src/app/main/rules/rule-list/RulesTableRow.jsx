import Image from 'next/image';
import { Avatar, Checkbox, TableCell, TableRow } from '@mui/material';
import { RuleType } from 'utils/rule_pb';
import { findKey } from 'lodash';
import clsx from 'clsx';

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
      className={clsx('h-60', { 'cursor-pointer': rule.isrecordowner })}
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={rule.recordpk}
      selected={isSelected}
      onClick={(ev) =>
        rule.isrecordowner &&
        handleClick(rule.recordpk, strRecordType.toLowerCase())
      }
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

      <TableCell
        className={clsx('p-8 md:p-12', { 'text-blue': rule.isrecordowner })}
        component="th"
        scope="row"
      >
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
        {ownerName && `By ${ownerName}`}
      </TableCell>

      <TableCell className="p-4 md:p-8" component="th" scope="row">
        {strRecordType}
      </TableCell>

      <TableCell
        className="p-2 md:p-16"
        component="th"
        scope="row"
        align="right"
      >
        {!!unitprice ? (
          `${unitprice} ${pricecurrency}`
        ) : (
          <div className="inline text-12 font-semibold py-4 px-12 rounded-full truncate bg-green text-white">
            Free
          </div>
        )}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row"></TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row"></TableCell>
    </TableRow>
  );
};

export default RulesTableRow;
