import { createSlice } from "@reduxjs/toolkit";

//Actions Store
import { addEpisode, getEpisode, deleteEpisode } from "../Actions/actionEpisodes";

export const episodesReducer = createSlice({
    name: 'episodes',
    initialState:{
      arr: []
    },
    reducers: {
        getEpisodeFavorites: getEpisode,
        addEpisodeFavorite: addEpisode,
        deleteEpisodefavorite: deleteEpisode
    }
})

export const {addEpisodeFavorite,deleteEpisodefavorite,getEpisodeFavorites} = episodesReducer.actions
export default episodesReducer.reducer
