import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
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
import RuleService from 'services/rules';
import { showMessage } from 'app/store/fuse/messageSlice';

function TemporalForm({ formRef, rule, error }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [recordPk, setRecordPk] = useState(null);

  const validationSchema = yup.object({
    title: yup.string('Enter the title').required('Title is required'),
    description: yup
      .string('Enter the description')
      .required('Description is required'),
    year: yup.string('Enter the year').required('Please select the year'),
    month: yup.string('Enter the month').required('Please select the month'),
    dayOfMonth: yup
      .string('Enter the day of month')
      .required('Day of month is required'),
    dayOfWeek: yup
      .string('Enter the day of week')
      .required('Day of week is required'),
    hour: yup.string('Enter the hour').required('Hour is required'),
    minute: yup.string('Enter the minute').required('Minute is required'),
    city: yup.string('Enter the city').required('City is required'),
    country: yup.string('Enter the country').required('Country is required'),
    currency: yup.string('Enter the currency'),
    price: yup.string('Enter the price'),
  });

  useEffect(() => {
    if (rule && rule.recordpk) {
      setRecordPk(rule.recordpk);
    }
  }, [rule]);

  const formik = useFormik({
    initialValues: {
      title: rule.title || '',
      description: rule.title || '',
      year: rule.year || constants.yearList[0],
      month: rule.month || constants.monthList[0],
      dayOfWeek: rule.dayOfWeek || constants.dayOfWeek[0],
      dayOfMonth: rule.dayOfMonth || constants.dayOfMonthList[0],
      hour: rule.hour || constants.hourList[0],
      minute: rule.minute || constants.minuteList[0],
      city: rule.locationcity || '',
      country: rule.locationcountry || '',
      currency: rule.pricecurrency || '',
      price: rule.unitprice || '',
      enabled: !!rule.recordenabled || true,
      private: !!rule.visibility || false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (recordPk) {
        values.recordPk = recordPk;
      }
      setLoading(true);
      RuleService.saveTemporalRule(values)
        .then((res) => {
          dispatch(
            showMessage({ message: 'Saved successfully.', variant: 'success' })
          );
          setRecordPk(res.rule.recordpk);
          setLoading(false);
          Router.push('/rules');
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
          id="year"
          name="year"
          select
          label="Year"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.year}
          helperText={formik.touched.year && formik.errors.year}
          error={formik.touched.year && Boolean(formik.errors.year)}
        >
          {constants.yearList.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="month"
          name="month"
          select
          label="Month"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.month}
          helperText={formik.touched.month && formik.errors.month}
          error={formik.touched.month && Boolean(formik.errors.month)}
        >
          {constants.monthList.map((label, index) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          id="dayOfMonth"
          name="dayOfMonth"
          select
          label="Day of Month"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.dayOfMonth}
          helperText={formik.touched.dayOfMonth && formik.errors.dayOfMonth}
          error={formik.touched.dayOfMonth && Boolean(formik.errors.dayOfMonth)}
        >
          {constants.dayOfMonthList.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          id="dayOfWeek"
          name="dayOfWeek"
          label="Day of Week"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.dayOfWeek}
          helperText={formik.touched.dayOfWeek && formik.errors.dayOfWeek}
          error={formik.touched.dayOfWeek && Boolean(formik.errors.dayOfWeek)}
        >
          {constants.dayOfWeek.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          id="hour"
          name="hour"
          select
          label="Hour"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.hour}
          helperText={formik.touched.hour && formik.errors.hour}
          error={formik.touched.hour && Boolean(formik.errors.hour)}
        >
          {constants.hourList.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          id="minute"
          name="minute"
          label="Minute"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          value={formik.values.minute}
          helperText={formik.touched.minute && formik.errors.minute}
          error={formik.touched.minute && Boolean(formik.errors.minute)}
        >
          {constants.minuteList.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          id="city"
          name="city"
          label="City"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.city}
          helperText={formik.touched.city && formik.errors.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
        />

        <TextField
          id="country"
          name="country"
          label="Country *"
          sx={{ width: '50%' }}
          disabled={loading}
          onChange={formik.handleChange}
          defaultValue={formik.values.country}
          helperText={formik.touched.country && formik.errors.country}
          error={formik.touched.country && Boolean(formik.errors.country)}
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

export default TemporalForm;
