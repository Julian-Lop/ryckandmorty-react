import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Actions
import { addCharacterFavorite, deleteCharacterfavorite } from '../../Redux/Reducers/charactersSlice'
import { addLocationFavorite, deleteLocationsfavorite } from '../../Redux/Reducers/locationsSlice'
import { addEpisodeFavorite, deleteEpisodesfavorite } from '../../Redux/Reducers/episodesSlice'

export default function Card({data,type}) {

	const charactersF = useSelector((state) => state.characters)
  const locationsF = useSelector((state) => state.locations)
  const episodesF = useSelector((state) => state.episodes)

	const dispatch = useDispatch()

  let favoritos = type == 'characters' ? charactersF : type == 'locations' ? locationsF : episodesF

  const [isFavorite, setIsFavorite] = useState(false)

  const addFavorites = () => {
    switch (type) {
      case 'characters':
        return dispatch(addCharacterFavorite(data))
      case 'locations':
        return dispatch(addLocationFavorite(data))
      case 'episdoes':
        return dispatch(addEpisodeFavorite(data)) 
    }
  }

  const deleteFavorites = () => {
    switch (type) {
      case 'characters':
        dispatch(deleteCharacterfavorite(data.id))
        setIsFavorite(false)
        return
      case 'locations':
        dispatch(deleteLocationsfavorite(data.id))
        setIsFavorite(false)
        return
      case 'episdoes':
        dispatch(deleteEpisodesfavorite(data.id))
        setIsFavorite(false)
        return 
    }
  }

  useEffect(()=>{
    if(favoritos.arr){
      console.log('favorites-->',favoritos.arr)
      if(favoritos.arr.length == 0){ return setIsFavorite(false)}
      else if(favoritos.arr.length && favoritos.arr?.filter((f) => f.id === data.id).length){
        return setIsFavorite(true)
      }
    }
  },[charactersF,locationsF,episodesF])

  return (
    <div>
        <h2>{data.name}</h2>
        {data.image ? ( <img src={data.image} alt={data.name+' image'} /> ) : null }
        {data.type ? ( <>Type: <p>{data.type}</p></>) : null}
        {data.dimension ? ( <>Dimension: <p>{data.dimension}</p></>) : null}
        {data.air_date ? ( <>Air Date: <p>{data.air_date}</p></>) : null}
        {data.episode ? ( <>Episode Code: <p>{data.episode}</p></>) : null}
        <br />
        {!isFavorite ?
          <button onClick={() => addFavorites()}>Add to Favorites</button> 
        :
          <button onClick={() => deleteFavorites()}>Delete Favorites</button>
        }
    </div>
  )
}
