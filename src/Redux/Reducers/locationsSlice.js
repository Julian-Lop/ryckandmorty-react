import { createSlice } from "@reduxjs/toolkit";

export const locationsReducer = createSlice({
    name: 'locations',
    initialState:{
      arr: []
    },
    reducers: {
        getLocationsFavorites: (state) => {
          const favorites = localStorage.getItem('locationsFavorites')
          if(!favorites) return state
          let parsFav = JSON.parse(favorites)
          state.arr = parsFav
        },
        addLocationsFavorite: (state,action) => {
          let currentFavorites = state.arr
          currentFavorites.push(action.payload)
          let strin = JSON.stringify(currentFavorites)
          localStorage.setItem('locationsFavorites',strin)
        },
        deleteLocationsfavorite: (state,action) => {
          let currentFavorites = state.arr
          let strin = currentFavorites.filter((f) => f.id != action.payload)
          strin = JSON.stringify(strin)
          localStorage.removeItem('locationsFavorites')
          localStorage.setItem('locationsFavorites',strin)
          state.arr = JSON.parse(strin)
        }
    }
})

export const {addLocationFavorite,deleteLocationsfavorite,getLocationsFavorites} = locationsReducer.actions
export default locationsReducer.reducer
