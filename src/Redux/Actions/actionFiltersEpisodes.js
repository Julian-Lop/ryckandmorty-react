export const getE = (state) => {
  const filt = localStorage.getItem('filtersE')
  if(!filt) return state
  let parsFil = JSON.parse(filt)
  state.pag = parsFil.pag || ''
  state.nameF = parsFil.nameF || ''
  state.episo = parsFil.episo || ''
}

export const addE = (state,action) => {
  state.pag = action.payload.pag || ''
  state.nameF = action.payload.nameF || ''
  state.episo = action.payload.episo || ''
  localStorage.removeItem('filtersE')
  localStorage.setItem('filtersE',JSON.stringify(action.payload))
}

export const deleteE = (state) => {
  state.pag = ''
  state.nameF = ''
  state.episo = ''
  localStorage.removeItem('filtersE')
}