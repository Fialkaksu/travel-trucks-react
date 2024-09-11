import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  location: '',
  equipment: [],
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
