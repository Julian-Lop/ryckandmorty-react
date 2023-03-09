import { createSlice } from "@reduxjs/toolkit"

//Actions Store
import { addF, getF, deleteF } from "../Actions/actionFiltersCharacters"

export const filtersCharactersReducer = createSlice({
    name: 'filtersCharacters',
    initialState:{
      pag: '',
      nameF: '',
      stat:'',
      typ:'',
      gen: ''
    },
    reducers: {
        getFilters: getF,
        addFilters: addF,
        deleteFilters: deleteF
    }
})

export const {addFilters,getFilters,deleteFilters} = filtersCharactersReducer.actions
export default filtersCharactersReducer.reducer

