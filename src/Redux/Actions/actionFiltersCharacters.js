export const getF = (state) => {
  const filt = localStorage.getItem('filtersC')
  if(!filt) return state
  let parsFil = JSON.parse(filt)
  state.pag = parsFil.pag || ''
  state.nameF = parsFil.nameF || ''
  state.stat = parsFil.stat || ''
  state.typ = parsFil.typ || ''
  state.gen = parsFil.gen || ''
}

export const addF = (state,action) => {
  state.pag = action.payload.pag || ''
  state.nameF = action.payload.nameF || ''
  state.stat = action.payload.stat || ''
  state.typ = action.payload.typ || ''
  state.gen = action.payload.gen || ''
  localStorage.removeItem('filtersC')
  localStorage.setItem('filtersC',JSON.stringify(action.payload))
}

export const deleteF = (state) => {
  state.pag = ''
  state.nameF = ''
  state.stat = ''
  state.typ = ''
  state.gen = ''
  localStorage.removeItem('filtersC')
}