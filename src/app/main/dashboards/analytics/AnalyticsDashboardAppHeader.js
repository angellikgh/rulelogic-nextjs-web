import Typography from '@mui/material/Typography';

function AnalyticsDashboardAppHeader(props) {
  return (
    <div className="flex w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
        <div className="flex flex-col flex-auto">
          <Typography className="text-3xl font-semibold tracking-tight leading-8">
            Dashboard
          </Typography>
          <Typography
            className="font-medium tracking-tight"
            color="text.secondary"
          >
            Monitor Rules, Actions and Events
          </Typography>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12"></div>
      </div>
    </div>
  );
}

export default AnalyticsDashboardAppHeader;
