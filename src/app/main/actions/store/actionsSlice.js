import ActionService from 'services/actions';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const getActions = createAsyncThunk(
  'action/actions/getActions',
  async ({ skip, limit, keyword }) => {
    return await ActionService.getActions({ skip, limit, keyword });
  }
);

const actionsAdapter = createEntityAdapter({});

export const { selectAll: selectActions, selectById: selectActionById } =
  actionsAdapter.getSelectors((state) => state.action.actions);

const actionsSlice = createSlice({
  name: 'actions',
  initialState: actionsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setActionsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getActions.fulfilled]: actionsAdapter.setAll,
  },
});

export const { setActionsSearchText } = actionsSlice.actions;

export const selectActionsSearchText = ({ action }) =>
  action.actions.searchText;

export default actionsSlice.reducer;
