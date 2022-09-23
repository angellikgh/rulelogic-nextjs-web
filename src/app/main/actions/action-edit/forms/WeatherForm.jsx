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

function WeatherForm({ formRef, action }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [recordPk, setRecordPk] = useState(null);
  const [partyPk, setPartyPk] = useState(null);

  const validationSchema = yup.object({
    title: yup.string('Enter the title').required('Title is required'),
    description: yup
      .string('Enter the description')
      .required('Description is required'),
    weather: yup
      .string('Enter the weather')
      .required('Please select the weather'),
    temperatureUnit: yup
      .string('Enter the temperature unit')
      .required('Temperature unit is required'),
    fromTemperature: yup
      .string('Enter the day of month')
      .required('From temperature is required'),
    toTemperature: yup
      .string('Enter the day of week')
      .required('To temperature is required'),
    city: yup.string('Enter the city').required('City is required'),
    country: yup.string('Enter the country').required('Country is required'),
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
      title: action.title || '',
      description: action.title || '',
      weather: action.weathertext || constants.weatherTextList[0],
      temperatureUnit: action.temperatureunit || 0,
      fromTemperature: action.temperaturefrom || 0,
      toTemperature: action.temperatureto || 0,
      city: action.locationcity || '',
      country: action.locationcountry || '',
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
      ActionService.saveWeatherAction(values)
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
        label="Title *"
        formik={formik}
        disabled={loading}
      />

      <CustomTextField
        type="text"
        name="description"
        label="Description *"
        multiline
        rows={2}
        formik={formik}
        disabled={loading}
      />

      <TextField
        id="weather"
        name="weather"
        select
        label="Weather"
        disabled={loading}
        onChange={formik.handleChange}
        defaultValue={formik.values.weather}
        helperText={formik.touched.weather && formik.errors.weather}
        error={formik.touched.weather && Boolean(formik.errors.weather)}
      >
        {constants.weatherTextList.map((label, index) => (
          <MenuItem key={label} value={label}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="temperatureUnit"
        name="temperatureUnit"
        select
        label="Temperature Unit"
        disabled={loading}
        onChange={formik.handleChange}
        defaultValue={formik.values.temperatureUnit}
        helperText={
          formik.touched.temperatureUnit && formik.errors.temperatureUnit
        }
        error={
          formik.touched.temperatureUnit &&
          Boolean(formik.errors.mtemperatureUnitonth)
        }
      >
        {constants.temperatureUnitList.map((label, index) => (
          <MenuItem key={label} value={index}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <Stack direction="row" spacing={2}>
        <CustomTextField
          type="text"
          name="fromTemperature"
          label="From Temperature *"
          formik={formik}
          disabled={loading}
          sx={{ width: '50%' }}
          inputProps={{ style: { textAlign: 'right' } }}
        />

        <CustomTextField
          type="text"
          name="toTemperature"
          label="To Temperature *"
          formik={formik}
          disabled={loading}
          sx={{ width: '50%' }}
          inputProps={{ style: { textAlign: 'right' } }}
        />
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

export default WeatherForm;
