
export const getEpisode = (state) => {
  const favorites = localStorage.getItem('episodesFavorites')
  if(!favorites) return state
  let parsFav = JSON.parse(favorites)
  state.arr = parsFav
}

export const addEpisode = (state,action) => {
  let currentFavorites = state.arr
  currentFavorites.push(action.payload)
  let strin = JSON.stringify(currentFavorites)
  localStorage.setItem('episodesFavorites',strin)
}

export const deleteEpisode = (state,action) => {
  let currentFavorites = state.arr
  let strin = currentFavorites.filter((f) => f.id != action.payload)
  strin = JSON.stringify(strin)
  localStorage.removeItem('episodesFavorites')
  localStorage.setItem('episodesFavorites',strin)
  state.arr = JSON.parse(strin)
}
