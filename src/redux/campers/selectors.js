import { createSelector } from "@reduxjs/toolkit";
import { selectLocation, selectEquipment, selectVehicleType } from "@redux/filters/selectors";

export const selectAllCampers = (state) => state.campers.items;
export const selectCamperById = (state) => state.campers.camper;

export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectLocation, selectEquipment, selectVehicleType],
  (campers, location, equipment, vehicleType) => {
    return campers.filter((camper) => {
      if (location && !camper.location.includes(location)) {
        return false;
      }
      if (equipment.length > 0 && !equipment.includes(camper.equipment) && !camper.transmission.includes(equipment)) {
        return false;
      }
      if (vehicleType && !camper.form.includes(vehicleType)) {
        return false;
      }
      return true;
    });
  }
);
