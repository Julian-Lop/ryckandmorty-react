import { createSlice } from "@reduxjs/toolkit"

//Actions Store
import { addE, getE, deleteE } from "../Actions/actionFiltersEpisodes"

export const filtersEpisodesReducer = createSlice({
    name: 'filtersEpisodes',
    initialState:{
      pag: '',
      nameF: '',
      episo:''
    },
    reducers: {
        getFilters: getE,
        addFilters: addE,
        deleteFilters: deleteE
    }
})

export const {addFilters,getFilters,deleteFilters} = filtersEpisodesReducer.actions
export default filtersEpisodesReducer.reducer

