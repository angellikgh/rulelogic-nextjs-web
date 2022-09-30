import EventService from 'services/events';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const getEvents = createAsyncThunk(
  'event/events/getEvents',
  async ({ skip, limit, keyword }) => {
    return await EventService.getEvents({ skip, limit, keyword });
  }
);

const eventsAdapter = createEntityAdapter({});

export const { selectAll: selectEvents, selectById: selectEventById } =
  eventsAdapter.getSelectors((state) => state.event.events);

const eventSlice = createSlice({
  name: 'events',
  initialState: eventsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setEventsSearchText: {
      reducer: (state, event) => {
        state.searchText = event.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEvents.fulfilled]: eventsAdapter.setAll,
  },
});

export const { setEventsSearchText } = eventSlice.actions;

export const selectEventsSearchText = ({ event }) => event.events.searchText;

export default eventSlice.reducer;
