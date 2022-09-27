import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import _ from 'lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function ActionEditHeader({ title, action, formRef }) {
  const theme = useTheme();
  const router = useRouter();
  const { actionId } = router.query;

  let ownerName = action.company || `${action.firstname} ${action.lastname}`;

  const handleSave = useCallback(() => {
    formRef && formRef.current && formRef.current.click();
  }, [formRef]);

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-16 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            role="button"
            onClick={() =>
              actionId === 'new' ? router.back() : router.push('/actions')
            }
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Actions</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {action.recordpk ? 'Edit Action' : 'New Action'}
              {title && <span className="ml-8 text-16">({title})</span>}
            </Typography>
            <Typography variant="caption" className="font-medium">
              {action.recordpk
                ? `${action.title} By ${ownerName || '***'}`
                : `Please fill out the information`}
            </Typography>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          // disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSave}
        >
          Save
        </Button>
      </motion.div>
    </div>
  );
}

export default ActionEditHeader;
