import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import { selectUser } from 'app/store/userSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import settingsConfig from 'app/configs/settingsConfig';
// import withAppProviders from './withAppProviders';
import { AuthProvider } from './auth/AuthContext';
import { useEffect } from 'react';

let emotionCacheOptions = {};

const App = () => {
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  useEffect(() => {
    emotionCacheOptions = {
      rtl: {
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
        insertionPoint: document.getElementById('emotion-insertion-point'),
      },
      ltr: {
        key: 'muiltr',
        stylisPlugins: [],
        insertionPoint: document.getElementById('emotion-insertion-point'),
      },
    };
  });

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <FuseTheme theme={mainTheme} direction={langDirection}>
        <AuthProvider>
          <FuseAuthorization
            userRole={user.role}
            loginRedirectUrl={settingsConfig.loginRedirectUrl}
          >
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              classes={{
                containerRoot:
                  'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
              }}
            >
              <FuseLayout layouts={themeLayouts} />
            </SnackbarProvider>
          </FuseAuthorization>
        </AuthProvider>
      </FuseTheme>
    </CacheProvider>
  );
};

export default App;
