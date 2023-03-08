import { createSlice } from "@reduxjs/toolkit"

//Actions Store
import { getCharacters, addCharacters, deleteCharacters } from "../Actions/actionCharacters"

export const charactersReducer = createSlice({
    name: 'characters',
    initialState:{
      arr: []
    },
    reducers: {
        getCharacterFavorites: getCharacters,
        addCharacterFavorite: addCharacters,
        deleteCharacterfavorite: deleteCharacters
    }
})

export const {addCharacterFavorite,deleteCharacterfavorite,getCharacterFavorites} = charactersReducer.actions
export default charactersReducer.reducer

