import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    vehicleType: "",
  },
  reducers: {
    changeFilter(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
