import { injectReducer } from 'app/store/index';

const withReducer = (key, reducer) => (WrappedComponent) => {
  injectReducer(key, reducer);

  // eslint-disable-next-line react/display-name
  return (props) => <WrappedComponent {...props} />;
};

export default withReducer;
