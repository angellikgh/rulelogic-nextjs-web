import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import widgets from 'src/mock/project_widgets.json';

export const getWidgets = createAsyncThunk(
  'projectDashboardApp/widgets/getWidgets',
  async () => {
    return widgets;
  }
);

const widgetsSlice = createSlice({
  name: 'projectDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ projectDashboardApp }) =>
  projectDashboardApp.widgets;

export default widgetsSlice.reducer;
