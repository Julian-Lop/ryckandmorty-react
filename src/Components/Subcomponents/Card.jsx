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
    <div className='Card'>
      <div className='content'>
        <div className='imgBx'>
          {data.image ? ( <img src={data.image} alt={data.name+' image'} /> ) : null }
        </div>
        <div className='contentBx'>
          <h2>{data.name}</h2>
          {data.type ? ( <p><b>Type:</b> {data.type}</p>) : null}
          {data.dimension ? ( <p><b>Dimension:</b> {data.dimension}</p>) : null}
          {data.air_date ? ( <p><b>Air Date:</b> {data.air_date}</p>) : null}
          {data.episode ? ( <p><b>Episode Code:</b> {data.episode}</p>) : null}
          <br />
        </div>
        <div className='sci'>
          <li style={{'--i':1}}>
            <button className='btnCard' onClick={() => goInfo()}>Info</button>
          </li>
          <li style={{'--i':2}}>
            {!isFavorite ?
              <button className='btnIcon' onClick={() => addFavorites()}><i className="far fa-heart"></i></button> 
            :
              <button className='btnIcon favorite' onClick={() => deleteFavorites()}><i className="fas fa-heart"></i></button>
            }
          </li>
        </div>
      </div>
    </div>
  )
}
