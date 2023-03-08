import { createSlice } from "@reduxjs/toolkit"

export const filtersReducer = createSlice({
    name: 'filters',
    initialState:{},
    reducers: {
        getFilters: (state) => {
          const filters = localStorage.getItem('filters')
          if(!filters) return state
          let parsFil = JSON.parse(filters)
          state.arr = parsFil
        },
        addFilters: (state,action) => {
          state = action.payload
          localStorage.removeItem('filters')
          localStorage.setItem('filters')
        },
        deleteFilters: (state) => {
          state = {}
          localStorage.removeItem('filters')
        }
    }
})

export const {addFilters,getFilters,deleteFilters} = filtersReducer.actions
export default filtersReducer.reducer

