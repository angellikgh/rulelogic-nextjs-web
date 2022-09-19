import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';

const createReducer = (asyncReducers) => (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    const combinedReducer = combineReducers({
      fuse,
      i18n,
      user,
      ...asyncReducers,
    });

    /*
    Reset the redux store when user logged out
     */
    if (action.type === 'user/userLoggedOut') {
      // state = undefined;
    }

    return combinedReducer(state, action);
  }
};

export default createReducer;
