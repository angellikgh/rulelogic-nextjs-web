import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Stack,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';

import * as constants from 'src/constants';
import CustomTextField from 'components/Form/CustomTextField';
import ActionService from 'services/actions';
import { showMessage } from 'app/store/fuse/messageSlice';

function SmsForm({ formRef, action }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [recordPk, setRecordPk] = useState(null);
  const [partyPk, setPartyPk] = useState(null);

  const validationSchema = yup.object({
    title: yup.string('Enter the subject').required('Subject is required'),
    description: yup
      .string('Enter the content')
      .required('Content is required'),
    currency: yup.string('Enter the currency'),
    price: yup.string('Enter the price'),
  });

  useEffect(() => {
    if (action && action.recordpk) {
      setRecordPk(action.recordpk);
    }

    if (action && action.partypk) {
      setPartyPk(action.partypk);
    }
  }, [action]);

  const formik = useFormik({
    initialValues: {
      title: action.smsmessagetitle || '',
      description: action.smsmessage || '',
      currency: action.pricecurrency || '',
      price: action.unitprice || '',
      enabled: !!action.recordenabled || true,
      private: !!action.visibility || false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (loading) return;

      if (recordPk) {
        values.recordPk = recordPk;
      }
      if (partyPk) {
        values.partyPk = partyPk;
      }
      setLoading(true);
      ActionService.saveSmsAction(values)
        .then((res) => {
          setRecordPk(res.action.recordpk);
          setLoading(false);
          dispatch(
            showMessage({ message: 'Saved successfully.', variant: 'success' })
          );
          Router.push('/actions');
        })
        .catch(() => {
          setLoading(false);
          dispatch(showMessage({ message: 'Failed save.', variant: 'error' }));
        });
    },
  });

  return (
    <Stack
      component="form"
      spacing={3}
      sx={{
        mx: 'auto',
        padding: 4,
        float: 'left',
        width: {
          md: 600,
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      method="post"
    >
      <CustomTextField
        type="text"
        name="title"
        label="Subject *"
        formik={formik}
        disabled={loading}
      />

      <CustomTextField
        type="text"
        name="description"
        label="Body *"
        multiline
        rows={2}
        formik={formik}
        disabled={loading}
      />

      <Stack direction="row" spacing={2}>
        <TextField
          select
          id="currency"
          name="currency"
          label="Currency"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.currency}
          helperText={formik.touched.currency && formik.errors.currency}
          error={formik.touched.currency && Boolean(formik.errors.currency)}
        >
          {constants.currencyList.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="price"
          label="Price"
          type="number"
          sx={{ width: '50%' }}
          inputProps={{ style: { textAlign: 'right' } }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.price}
          helperText={formik.touched.price && formik.errors.price}
          error={formik.touched.price && Boolean(formik.errors.price)}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.enabled}
              onChange={formik.handleChange}
              name="enabled"
            />
          }
          label="Enabled"
          sx={{ pl: 2, width: '50%' }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.private}
              onChange={formik.handleChange}
              name="private"
            />
          }
          label="Private"
          sx={{ width: '50%' }}
        />
      </Stack>

      <Box>
        <Button ref={formRef} type="submit" sx={{ display: 'none' }} />
      </Box>
    </Stack>
  );
}

export default SmsForm;
