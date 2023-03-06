import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'

//Actions
import { addCharacterFavorite, deleteCharacterfavorite } from '../../Redux/Reducers/charactersSlice'
import { addLocationFavorite, deleteLocationfavorite } from '../../Redux/Reducers/locationsSlice'
import { addEpisodeFavorite, deleteEpisodefavorite } from '../../Redux/Reducers/episodesSlice'

export default function Card({data,type}) {

	const charactersF = useSelector((state) => state.characters)
  const locationsF = useSelector((state) => state.locations)
  const episodesF = useSelector((state) => state.episodes)

	const dispatch = useDispatch()

  const navigate = useNavigate()

  let favoritos = type == 'characters' ? charactersF : type == 'locations' ? locationsF : episodesF

  const [isFavorite, setIsFavorite] = useState(false)

  const goInfo = () => {
    navigate('/'+type+'/'+data.id)
  }

  const addFavorites = () => {
    switch (type) {
      case 'characters':
        return dispatch(addCharacterFavorite(data))
      case 'locations':
        return dispatch(addLocationFavorite(data))
      case 'episodes':
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
        dispatch(deleteLocationfavorite(data.id))
        setIsFavorite(false)
        return
      case 'episodes':
        dispatch(deleteEpisodefavorite(data.id))
        setIsFavorite(false)
        return 
    }
  }

  useEffect(()=>{
    if(favoritos.arr){
      if(favoritos.arr.length == 0){ return setIsFavorite(false)}
      else if(favoritos.arr.length && favoritos.arr?.filter((f) => f.id === data.id).length){
        return setIsFavorite(true)
      }
    }
  },[charactersF,locationsF,episodesF])

  return (
    <div onClick={() => goInfo()} style={{width:'300px',height:'max-content', border:'1px solid #fefefe',borderRadius:'10px',marginBottom:'20px',paddingBottom:'10px',marginTop:'10px'}}>
        <h2>{data.name}</h2>
        {data.image ? ( <img src={data.image} alt={data.name+' image'} /> ) : null }
        {data.type ? ( <p><b>Type:</b> {data.type}</p>) : null}
        {data.dimension ? ( <p><b>Dimension:</b> {data.dimension}</p>) : null}
        {data.air_date ? ( <p><b>Air Date:</b> {data.air_date}</p>) : null}
        {data.episode ? ( <p><b>Episode Code:</b> {data.episode}</p>) : null}
        <br />
        {!isFavorite ?
          <button style={{background:'#90BF77'}} onClick={() => addFavorites()}>Add to Favorites</button> 
        :
          <button style={{background:'#D24B4B'}} onClick={() => deleteFavorites()}>Delete Favorites</button>
        }
    </div>
  )
}
