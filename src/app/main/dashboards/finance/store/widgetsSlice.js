import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('financeDashboardApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/finance/widgets');

  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'financeDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ financeDashboardApp }) => financeDashboardApp.widgets;

export default widgetsSlice.reducer;
