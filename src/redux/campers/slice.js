import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    total: 0,
    items: [],
    camper: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, { payload: { total, items } }) => {
        state.loading = false;
        state.error = null;
        state.total = total;
        state.items = items;
      })
      .addCase(getCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.camper = payload;
      })
      .addCase(getCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
