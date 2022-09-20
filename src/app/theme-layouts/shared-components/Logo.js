import Image from 'next/image';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <Image
        width={48}
        height={48}
        className="logo-icon"
        src="/assets/images/logo/icononly_transparent_nobuffer.png"
        alt="Rule Logic"
      />

      <div
        className="badge flex items-center py-4 px-8 mx-8 rounded"
        style={{ backgroundColor: '#12121208', color: '#61DAFB' }}
      >
        <span className="react-text text-20 text-semibold mx-4">
          Rule Logic
        </span>
      </div>
    </Root>
  );
}

export default Logo;
