import { createSlice } from "@reduxjs/toolkit";

export const locationsReducer = createSlice({
    name: 'locations',
    initialState:{
      arr: []
    },
    reducers: {
        getLocationFavorites: (state) => {
          const favorites = localStorage.getItem('locationsFavorites')
          if(!favorites) return state
          let parsFav = JSON.parse(favorites)
          state.arr = parsFav
        },
        addLocationFavorite: (state,action) => {
          let currentFavorites = state.arr
          currentFavorites.push(action.payload)
          let strin = JSON.stringify(currentFavorites)
          localStorage.setItem('locationsFavorites',strin)
        },
        deleteLocationfavorite: (state,action) => {
          let currentFavorites = state.arr
          let strin = currentFavorites.filter((f) => f.id != action.payload)
          strin = JSON.stringify(strin)
          localStorage.removeItem('locationsFavorites')
          localStorage.setItem('locationsFavorites',strin)
          state.arr = JSON.parse(strin)
        }
    }
})

export const {addLocationFavorite,deleteLocationfavorite,getLocationFavorites} = locationsReducer.actions
export default locationsReducer.reducer
