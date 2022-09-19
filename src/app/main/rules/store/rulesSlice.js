import RuleService from 'services/rules';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const getRules = createAsyncThunk(
  'rule/rules/getRules',
  async ({ skip, limit, keyword }) => {
    return await RuleService.getRules({ skip, limit, keyword });
  }
);

const rulesAdapter = createEntityAdapter({});

export const { selectAll: selectRules, selectById: selectRuleById } =
  rulesAdapter.getSelectors((state) => state.rule.rules);

const rulesSlice = createSlice({
  name: 'rules',
  initialState: rulesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setRulesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getRules.fulfilled]: rulesAdapter.setAll,
  },
});

export const { setRulesSearchText } = rulesSlice.actions;

export const selectRulesSearchText = ({ rule }) => rule.rules.searchText;

export default rulesSlice.reducer;
