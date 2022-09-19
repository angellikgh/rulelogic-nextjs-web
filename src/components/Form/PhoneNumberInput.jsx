import React from 'react';
import RPI from 'react-phone-input-2';
import { FormControl, FormHelperText } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

import 'react-phone-input-2/lib/style.css';

const PhoneInput = RPI.default ?? RPI;

function CustomPhoneInput({
  id,
  name,
  onChange,
  helperText,
  label,
  error,
  ...props
}) {
  const theme = useTheme();

  return (
    <FormControl error={error}>
      <PhoneInput
        country={'us'}
        inputProps={{
          id,
          name,
        }}
        onChange={(value, country, e) => {
          onChange(e);
        }}
        containerStyle={{
          border: '1px solid',
          borderColor: error ? theme.palette.grey.light : grey[400],
          paddingLeft: '0.5rem',
          borderRadius: '0.5rem',
        }}
        inputStyle={{
          border: 'none',
          height: '50px',
          fontSize: '16px',
        }}
        dropdownStyle={{
          border: 'none',
        }}
        buttonStyle={{
          border: 'none',
          background: 'white',
        }}
        {...props}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default CustomPhoneInput;
