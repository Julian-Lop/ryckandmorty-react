import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./Reducers/charactersSlice";
import locationsSlice from "./Reducers/locationsSlice";
import episodesSlice from "./Reducers/episodesSlice";
import filtersCharactersReducer from "./Reducers/filtersCharactersSlice";
import filtersLocationsReducer from "./Reducers/filtersLocationsSlice";
import filtersEpisodesReducer from "./Reducers/filtersEpisodesSlice";

export const store = configureStore({
    reducer:{
      characters: charactersSlice,
      locations: locationsSlice,
      episodes: episodesSlice,
      filtersCharacters: filtersCharactersReducer,
      filtersLocations : filtersLocationsReducer,
      filtersEpisodes : filtersEpisodesReducer
    },
})


