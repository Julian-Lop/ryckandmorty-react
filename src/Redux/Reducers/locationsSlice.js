import { createSlice } from "@reduxjs/toolkit";

//Actions Store
import { addLocation, getLocation, deleteLocation } from "../Actions/actionLocations";

export const locationsReducer = createSlice({
    name: 'locations',
    initialState:{
      arr: []
    },
    reducers: {
        getLocationFavorites: getLocation,
        addLocationFavorite: addLocation,
        deleteLocationfavorite: deleteLocation
    }
})

export const {addLocationFavorite,deleteLocationfavorite,getLocationFavorites} = locationsReducer.actions
export default locationsReducer.reducer
