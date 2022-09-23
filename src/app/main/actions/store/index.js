import { combineReducers } from '@reduxjs/toolkit';
import actions from './actionsSlice';

const reducer = combineReducers({
  actions,
});

export default reducer;
