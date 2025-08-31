import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "./thunks";

const DEFAULT_PARAMS = {
  q: "",
  state: "",
  entityType: "",
  gst: "",
  status: "",
  sort: "legal_name",
  order: "asc",
  page: 1,
  pageSize: 12,
};

const slice = createSlice({
  name: "search",
  initialState: {
    params: { ...DEFAULT_PARAMS },
    data: { total: 0, page: 1, pageSize: 12, items: [] },
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, { payload }) {
      state.params.q = payload;
      state.params.page = 1;
    },
    setFilters(state, { payload }) {
      state.params = { ...state.params, ...payload, page: 1 };
    },
    setSort(state, { payload }) {
      state.params.sort = payload;
    },
    setOrder(state, { payload }) {
      state.params.order = payload;
    },
    setPage(state, { payload }) {
      state.params.page = payload;
    },
    resetFilters(state) {
      state.params = { ...DEFAULT_PARAMS };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to load";
      });
  },
});

export const {
  setQuery,
  setFilters,
  setSort,
  setOrder,
  setPage,
  resetFilters,
} = slice.actions;
export default slice.reducer;
