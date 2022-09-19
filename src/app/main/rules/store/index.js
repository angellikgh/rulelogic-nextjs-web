import { combineReducers } from '@reduxjs/toolkit';
import rules from './rulesSlice';

const reducer = combineReducers({
  rules,
});

export default reducer;
