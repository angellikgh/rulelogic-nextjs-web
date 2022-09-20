import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import WIDGET_DATA from 'src/mock/widgets.json';

export const getWidgets = createAsyncThunk(
  'analyticsDashboardApp/widgets/getWidgets',
  async () => {
    return WIDGET_DATA;
  }
);

const widgetsSlice = createSlice({
  name: 'analyticsDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ analyticsDashboardApp }) =>
  analyticsDashboardApp.widgets;

export default widgetsSlice.reducer;
