import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./Reducers/charactersSlice";
import locationsSlice from "./Reducers/locationsSlice";
import episodesSlice from "./Reducers/episodesSlice";
import filtersReducer from "./Reducers/filters";

export const store = configureStore({
    reducer:{
      characters: charactersSlice,
      locations: locationsSlice,
      episodes: episodesSlice,
      filters: filtersReducer
    },
})


