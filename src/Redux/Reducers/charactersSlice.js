import { createSlice } from "@reduxjs/toolkit"

export const charactersReducer = createSlice({
    name: 'characters',
    initialState:{
      arr: []
    },
    reducers: {
        getCharacterFavorites: (state) => {
          const favorites = localStorage.getItem('charactersFavorites')
          if(!favorites) return state
          let parsFav = JSON.parse(favorites)
          state.arr = parsFav
        },
        addCharacterFavorite: (state,action) => {
          let currentFavorites = state.arr
          currentFavorites.push(action.payload)
          let strin = JSON.stringify(currentFavorites)
          localStorage.setItem('charactersFavorites',strin)
        },
        deleteCharacterfavorite: (state,action) => {
          let currentFavorites = state.arr
          let strin = currentFavorites.filter((f) => f.id != action.payload)
          strin = JSON.stringify(strin)
          localStorage.removeItem('charactersFavorites')
          localStorage.setItem('charactersFavorites',strin)
          state.arr = JSON.parse(strin)
        }
    }
})

export const {addCharacterFavorite,deleteCharacterfavorite,getCharacterFavorites} = charactersReducer.actions
export default charactersReducer.reducer

