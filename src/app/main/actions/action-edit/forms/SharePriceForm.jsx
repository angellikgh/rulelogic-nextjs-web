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
  Box,
} from '@mui/material';
import TextField from '@mui/material/TextField';

import * as constants from 'src/constants';
import CustomTextField from 'components/Form/CustomTextField';
import { showMessage } from 'app/store/fuse/messageSlice';

function ShardPriceForm({ formRef, action, error, onNotify }) {
  const dispatch = useDispatch();
  const [loading] = useState(false);
  const [recordPk, setRecordPk] = useState(null);

  const validationSchema = yup.object({
    title: yup.string('Enter the title').required('Title is required'),
    description: yup
      .string('Enter the description')
      .required('Description is required'),
    stockExchange: yup
      .string('Enter the stock exchange')
      .required('Stock exchange is required'),
    shareSymbol: yup
      .string('Enter the share symbol')
      .required('Share symbol is required'),
    sharePrice: yup
      .string('Enter the share price')
      .required('Share price is required'),
    priceFrom: yup
      .string('Enter the from price')
      .required('From price is required'),
    priceTo: yup.string('Enter the to price').required('To price is required'),
    currency: yup.string('Enter the currency'),
    price: yup.string('Enter the price'),
  });

  useEffect(() => {
    if (action && action.recordpk) {
      setRecordPk(action.recordpk);
    }
  }, [action]);

  const formik = useFormik({
    initialValues: {
      title: action.title || '',
      description: action.description || '',
      stockExchange: action.stockExchange || '',
      shareSymbol: action.shareSymbol || '',
      sharePrice: action.sharePrice || '',
      priceFrom: action.priceFrom || '',
      priceTo: action.priceTo || '',
      currency: action.pricecurrency || '',
      price: action.unitprice || '',
      enabled: !!action.recordenabled || true,
      private: !!action.visibility || false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (recordPk) {
        values.recordPk = recordPk;
      }

      dispatch(
        showMessage({ message: 'Saved successfully.', variant: 'success' })
      );
    },
  });

  return (
    <Stack
      component="form"
      spacing={3}
      sx={{
        mx: 'auto',
        padding: 4,
        width: {
          md: 600,
        },
        float: 'left',
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      method="post"
    >
      <CustomTextField
        type="text"
        name="title"
        label="Title *"
        formik={formik}
        disabled={loading}
      />

      <TextField
        id="description"
        name="description"
        label="Description *"
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
          id="stockExchange"
          name="stockExchange"
          label="Stock Exchange *"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.stockExchange}
          helperText={
            formik.touched.stockExchange && formik.errors.stockExchange
          }
          error={
            formik.touched.stockExchange && Boolean(formik.errors.stockExchange)
          }
        />

        <TextField
          id="sharePrice"
          name="sharePrice"
          label="Share Price *"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.sharePrice}
          helperText={formik.touched.sharePrice && formik.errors.sharePrice}
          error={formik.touched.sharePrice && Boolean(formik.errors.sharePrice)}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          id="priceFrom"
          name="priceFrom"
          type="number"
          label="From Price *"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.priceFrom}
          helperText={formik.touched.priceFrom && formik.errors.priceFrom}
          error={formik.touched.priceFrom && Boolean(formik.errors.priceFrom)}
        />

        <TextField
          id="priceTo"
          name="priceTo"
          type="number"
          label="To Price *"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.priceTo}
          helperText={formik.touched.priceTo && formik.errors.priceTo}
          error={formik.touched.priceTo && Boolean(formik.errors.priceTo)}
        />
      </Stack>

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
        <Button
          ref={formRef}
          type="submit"
          loading={loading}
          sx={{ display: 'none' }}
        />
      </Box>
    </Stack>
  );
}

export default ShardPriceForm;
