import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  FormHelperText,
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

function EmailForm({ formRef, action, error }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [recordPk, setRecordPk] = useState(null);
  const [partyPk, setPartyPk] = useState(null);

  const validationSchema = yup.object({
    from: yup.string('Enter the from').required('From is required'),
    cc: yup.string('Enter the cc'),
    bcc: yup.string('Enter the bcc'),
    to: yup.string('Enter the to').required('Please select the to'),
    title: yup.string('Enter the subject').required('Subject is required'),
    description: yup
      .string('Enter the content')
      .required('Content is required'),
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
      from: action.emailmessagefrom || '',
      cc: action.emailmessageto || '',
      bcc: action.emailmessagebcc || '',
      to: action.emailmessageto || '',
      title: action.emailmessagesubject || '',
      description: action.emailmessagebody || '',
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
      ActionService.saveEmailAction(values)
        .then((res) => {
          dispatch(
            showMessage({ message: 'Saved successfully.', variant: 'success' })
          );
          setRecordPk(res.action.recordpk);
          setLoading(false);
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
        float: 'left',
        width: {
          md: 600,
        },
        mx: 'auto',
        padding: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      method="post"
    >
      <TextField
        id="from"
        name="from"
        label="From *"
        disabled={loading}
        onChange={formik.handleChange}
        defaultValue={formik.values.from}
        helperText={formik.touched.from && formik.errors.from}
        error={formik.touched.from && Boolean(formik.errors.from)}
      />

      <TextField
        id="to"
        name="to"
        label="To *"
        disabled={loading}
        onChange={formik.handleChange}
        defaultValue={formik.values.to}
        helperText={formik.touched.to && formik.errors.to}
        error={formik.touched.to && Boolean(formik.errors.to)}
      />

      <TextField
        id="cc"
        name="cc"
        label="CC"
        disabled={loading}
        onChange={formik.handleChange}
        value={formik.values.cc}
        helperText={formik.touched.cc && formik.errors.cc}
        error={formik.touched.cc && Boolean(formik.errors.cc)}
      />

      <TextField
        id="bcc"
        name="bcc"
        label="BCC"
        disabled={loading}
        onChange={formik.handleChange}
        value={formik.values.bcc}
        helperText={formik.touched.bcc && formik.errors.bcc}
        error={formik.touched.bcc && Boolean(formik.errors.bcc)}
      />

      <CustomTextField
        type="text"
        name="title"
        label="Subject *"
        formik={formik}
        disabled={loading}
      />

      <TextField
        id="description"
        name="description"
        label="Content *"
        multiline
        rows={2}
        disabled={loading}
        onChange={formik.handleChange}
        defaultValue={formik.values.description}
        helperText={formik.touched.description && formik.errors.description}
        error={formik.touched.description && Boolean(formik.errors.description)}
      />

      <Stack direction="row" spacing={2}>
        <TextField
          select
          id="currency"
          name="currency"
          label="Currency"
          sx={{ width: '50%' }}
          disabled={loading}
          value={formik.values.currency}
          onChange={formik.handleChange}
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

      {error && <FormHelperText error>{error}</FormHelperText>}

      <Box>
        <Button ref={formRef} type="submit" sx={{ display: 'none' }} />
      </Box>
    </Stack>
  );
}

export default EmailForm;
