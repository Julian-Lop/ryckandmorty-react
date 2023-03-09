import { createSlice } from "@reduxjs/toolkit"

//Actions Store
import { addL, getL, deleteL } from "../Actions/actionFiltersLocations"

export const filtersLocationsReducer = createSlice({
    name: 'filtersLocations',
    initialState:{
      pag: '',
      nameF: '',
      typ:'',
      dimen: ''
    },
    reducers: {
        getFilters: getL,
        addFilters: addL,
        deleteFilters: deleteL
    }
})

export const {addFilters,getFilters,deleteFilters} = filtersLocationsReducer.actions
export default filtersLocationsReducer.reducer

