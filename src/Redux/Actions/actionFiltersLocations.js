export const getL = (state) => {
  const filt = localStorage.getItem('filtersL')
  if(!filt) return state
  let parsFil = JSON.parse(filt)
  state.pag = parsFil.pag || ''
  state.nameF = parsFil.nameF || ''
  state.typ = parsFil.typ || ''
  state.dimen = parsFil.dimen || ''
}

export const addL = (state,action) => {
  state.pag = action.payload.pag || ''
  state.nameF = action.payload.nameF || ''
  state.typ = action.payload.typ || ''
  state.dimen = action.payload.dimen || ''
  localStorage.removeItem('filtersL')
  localStorage.setItem('filtersL',JSON.stringify(action.payload))
}

export const deleteL = (state) => {
  state.pag = ''
  state.nameF = ''
  state.typ = ''
  state.dimen = ''
  localStorage.removeItem('filtersL')
}