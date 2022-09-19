import Image from 'next/image';
import { memo } from 'react';
import Box from '@mui/material/Box';

function FuseSplashScreen() {
  return (
    <div id="fuse-splash-screen">
      <div className="logo">
        <Image
          width="180"
          height="180"
          src="/assets/images/logo/logo.svg"
          alt="Rule Logic"
        />
      </div>
      <Box
        id="spinner"
        sx={{
          '& > div': {
            backgroundColor: 'palette.secondary.main',
          },
        }}
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

export default memo(FuseSplashScreen);
