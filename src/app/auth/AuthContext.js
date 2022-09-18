import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import { showMessage } from 'app/store/fuse/messageSlice';
import { logoutUser, setUser } from 'app/store/userSlice';
import AuthService from 'services/auth';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.on('onAutoLogin', () => {
      dispatch(showMessage({ message: 'Signing in with JWT' }));

      /**
       * Sign in and retrieve user data with stored token
       */
      AuthService.signInWithToken()
        .then((user) => {
          success(user, 'Signed in with JWT');
        })
        .catch((error) => {
          pass(error.message);
        });
    });

    AuthService.on('onLogin', (user) => {
      success(user, 'Signed in');
    });

    AuthService.on('onLogout', () => {
      pass('Signed out');

      dispatch(logoutUser());
    });

    AuthService.on('onAutoLogout', (message) => {
      pass(message);

      dispatch(logoutUser());
    });

    AuthService.on('onNoAccessToken', () => {
      pass();
    });

    AuthService.on('onFailed', (message) => {
      error(message);
    });

    AuthService.init();

    function success(user, message) {
      if (message) {
        dispatch(showMessage({ message, variant: 'success' }));
      }

      Promise.all([dispatch(setUser(user))]).then((values) => {
        setWaitAuthCheck(false);
        setIsAuthenticated(true);
      });
    }

    function pass(message) {
      if (message) {
        dispatch(showMessage({ message }));
      }

      setWaitAuthCheck(false);
      setIsAuthenticated(false);
    }

    function error(message) {
      if (message) {
        dispatch(showMessage({ message, variant: 'error' }));
      }
    }
  }, [dispatch]);

  return waitAuthCheck ? (
    <FuseSplashScreen />
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
