import { createSlice } from "@reduxjs/toolkit";

export const episodesReducer = createSlice({
    name: 'episodes',
    initialState:{
      arr: []
    },
    reducers: {
        getEpisodesFavorites: (state) => {
          const favorites = localStorage.getItem('episodesFavorites')
          if(!favorites) return state
          let parsFav = JSON.parse(favorites)
          state.arr = parsFav
        },
        addEpisodesFavorite: (state,action) => {
          let currentFavorites = state.arr
          currentFavorites.push(action.payload)
          let strin = JSON.stringify(currentFavorites)
          localStorage.setItem('episodesFavorites',strin)
        },
        deleteEpisodesfavorite: (state,action) => {
          let currentFavorites = state.arr
          let strin = currentFavorites.filter((f) => f.id != action.payload)
          strin = JSON.stringify(strin)
          localStorage.removeItem('episodesFavorites')
          localStorage.setItem('episodesFavorites',strin)
          state.arr = JSON.parse(strin)
        }
    }
})

export const {addEpisodeFavorite,deleteEpisodesfavorite,getEpisodesFavorites} = episodesReducer.actions
export default episodesReducer.reducer
