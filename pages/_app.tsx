import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import { Provider, useStore, useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import { SnackbarProvider } from 'notistack';

import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import BrowserRouter from '@fuse/core/BrowserRouter';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import { selectUser } from 'app/store/userSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import settingsConfig from 'app/configs/settingsConfig';
import { AuthProvider } from 'app/auth/AuthContext';
import { makeStore } from 'app/store';
import AppContext from 'app/AppContext';
import routes from 'app/configs/routesConfig';

let emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    prepend: true,
    // insertionPoint: document.getElementById('emotion-insertion-point'),
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    prepend: true,
    // insertionPoint: document.getElementById('emotion-insertion-point'),
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  // eslint-disable-next-line react/no-children-prop
  return (
    <AppContext.Provider
      value={{
        routes,
      }}
    >
      <Provider store={store}>
        <CacheProvider value={createCache(emotionCacheOptions.ltr)}>
          <FuseTheme theme={mainTheme} direction={langDirection}>
            <AuthProvider>
              <BrowserRouter>
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
                    <FuseLayout layouts={themeLayouts}>
                      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
                    </FuseLayout>
                  </SnackbarProvider>
                </FuseAuthorization>
              </BrowserRouter>
            </AuthProvider>
          </FuseTheme>
        </CacheProvider>
      </Provider>
    </AppContext.Provider>
  );
}

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
