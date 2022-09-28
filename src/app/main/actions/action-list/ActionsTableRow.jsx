import Image from 'next/image';
import { Avatar, Box, TableCell, TableRow, Typography } from '@mui/material';
import { find } from 'lodash';
import clsx from 'clsx';
import LoadingButton from '@mui/lab/LoadingButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ActionTypes from 'src/constants/ActionTypes';
import Yellow from '@mui/material/colors/yellow';
import Red from '@mui/material/colors/red';
import { formatNumber } from 'utils/Utils';

const ActionButton = ({ children, ...props }) => (
  <LoadingButton className="py-4 pl-4 pr-8 min-h-24 h-24" {...props}>
    {children}
  </LoadingButton>
);

const ToggleButtonLabel = ({ children, ...props }) => (
  <Typography
    variant="span"
    sx={{
      display: {
        md: 'inherit',
        xs: 'none',
      },
    }}
  >
    {children}
  </Typography>
);

const ActionsTableRow = ({
  action,
  onClick,
  onStart,
  onSubscribe,
  onFavorite,
}) => {
  const {
    title,
    description,
    info,
    ownerparty,
    recordtype,
    unitprice,
    pricecurrency,
    icon,
  } = action;
  const isSelected = false;
  const actionType = find(ActionTypes, (v) => v.id === parseInt(recordtype));
  const ownerName =
    ownerparty.company || `${ownerparty.firstname} ${ownerparty.lastname}`;
  const isFavorite = info.hasviewerfavouritedrecord;
  const isSubscribed = info.hasviewersubscribed;

  const hookClickEvent = (cb) => (e) => {
    e.stopPropagation();

    cb && cb(e);
  };

  return (
    <TableRow
      className={clsx('h-60', { 'cursor-pointer': action.isrecordowner })}
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={action.recordpk}
      selected={isSelected}
      onClick={(ev) =>
        action.isrecordowner && onClick(action.recordpk, action.recordtype)
      }
    >
      <TableCell className="p-1 md:p-12" component="th" scope="row">
        {icon ? (
          <Image alt={title} src={`/${icon}`} width={64} height={64} />
        ) : (
          <Avatar
            sx={{
              width: 48,
              height: 48,
              backgroundColor: info.recordtitlecolor || Red[500],
            }}
          >
            {info.recordtitlefirstletter}
          </Avatar>
        )}
      </TableCell>

      <TableCell className="p-1 md:p-4" component="th" scope="row">
        <ActionButton onClick={hookClickEvent(onFavorite)} sx={{ width: 36 }}>
          {isFavorite ? (
            <>
              <FavoriteIcon fontSize="small" sx={{ color: Yellow[600] }} />
            </>
          ) : (
            <>
              <FavoriteBorderIcon fontSize="small" />
            </>
          )}
        </ActionButton>
      </TableCell>

      <TableCell
        className={clsx('p-8 md:p-12', { 'text-blue': action.isrecordowner })}
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

      <TableCell
        className="p-4 md:p-8"
        component="th"
        scope="row"
        sx={{ textTransform: 'capitalize' }}
      >
        {actionType.title}
      </TableCell>

      <TableCell
        className="p-2 md:p-16"
        component="th"
        scope="row"
        align="right"
      >
        {!!unitprice ? (
          `${formatNumber(unitprice)} ${pricecurrency}`
        ) : (
          <div className="inline text-12 font-semibold py-4 px-12 rounded-full truncate bg-green text-white">
            Free
          </div>
        )}
      </TableCell>

      <TableCell className="p-4 md:p-16" component="th" scope="row">
        <Box className="flex flex-row gap-4">
          {!!action.isrecordowner && (
            <ActionButton
              variant="outlined"
              color={action.recordstatus ? 'secondary' : 'primary'}
              onClick={hookClickEvent(onStart)}
            >
              {action.recordstatus ? (
                <>
                  <StopCircleOutlinedIcon fontSize="small" />
                  <ToggleButtonLabel>Stop</ToggleButtonLabel>
                </>
              ) : (
                <>
                  <PlayCircleFilledWhiteOutlinedIcon fontSize="small" />
                  <ToggleButtonLabel>Start</ToggleButtonLabel>
                </>
              )}
            </ActionButton>
          )}

          {!!action.isrecordowner && (
            <ActionButton variant="outlined" color="primary" disabled={true}>
              <ContentCopyIcon fontSize="small" className="mr-4 text-15" />
              Duplicate
            </ActionButton>
          )}
        </Box>
      </TableCell>

      <TableCell className="p-4 md:p-16 text-right" component="th" scope="row">
        <Box className="flex flex-row gap-2">
          {!action.isrecordowner && (
            <ActionButton
              variant="outlined"
              color={isSubscribed ? 'secondary' : 'primary'}
              onClick={hookClickEvent(onSubscribe)}
            >
              {isSubscribed ? (
                <>
                  <NotificationsOffOutlinedIcon fontSize="small" />
                  <ToggleButtonLabel>Unsubscribe</ToggleButtonLabel>
                </>
              ) : (
                <>
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                  <ToggleButtonLabel>Subscribe</ToggleButtonLabel>
                </>
              )}
            </ActionButton>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ActionsTableRow;
