const { TextField } = require('@mui/material');

const CustomTextField = ({ formik, name, children, ...props }) => {
  return (
    <TextField
      id={name}
      name={name}
      onChange={formik.handleChange}
      defaultValue={formik.values[name]}
      helperText={formik.touched[name] && formik.errors[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      {...props}
    >
      {children}
    </TextField>
  );
};

export default CustomTextField;
