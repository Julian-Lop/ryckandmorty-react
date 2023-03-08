
export const getCharacters = (state) => {
  const favorites = localStorage.getItem('charactersFavorites')
  if(!favorites) return state
  let parsFav = JSON.parse(favorites)
  state.arr = parsFav
}

export const addCharacters = (state,action) => {
  let currentFavorites = state.arr
  currentFavorites.push(action.payload)
  let strin = JSON.stringify(currentFavorites)
  localStorage.setItem('charactersFavorites',strin)
}

export const deleteCharacters = (state,action) => {
  let currentFavorites = state.arr
  let strin = currentFavorites.filter((f) => f.id != action.payload)
  strin = JSON.stringify(strin)
  localStorage.removeItem('charactersFavorites')
  localStorage.setItem('charactersFavorites',strin)
  state.arr = JSON.parse(strin)
}
