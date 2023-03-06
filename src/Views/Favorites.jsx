import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Components
import CardFavorites from '../Components/CardFavorites'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'
import { getLocationsFavorites } from '../Redux/Reducers/locationsSlice'
import { getEpisodesFavorites } from '../Redux/Reducers/episodesSlice'

export default function Favorites() {
	const dispatch = useDispatch()
	const charactersF = useSelector((state) => state.characters)
	const locationsF = useSelector((state) => state.locations)
	const episodesF = useSelector((state) => state.episodes)

	const [typeFavorite, setTypeFavorite] = useState(2)

	useEffect(() => {
		dispatch(getCharacterFavorites())
		dispatch(getLocationsFavorites())
		dispatch(getEpisodesFavorites())
	},[])
	
	return (
		<div>
			<div style={{width:'50%',position:'absolute',left:'0',right:'0',top:'10%',bottom:'0',margin:'auto',textAlign:'center'}}>
				<h1>Favorite Section</h1>
				<ul style={{padding:'0',width:'100%',listStyle:'none',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
					<li style={{cursor:'pointer'}} onClick={() => setTypeFavorite(1)}>Characters</li>
					<li style={{cursor:'pointer'}} onClick={() => setTypeFavorite(2)}>Locations</li>
					<li style={{cursor:'pointer'}} onClick={() => setTypeFavorite(3)}>Episodes</li>
				</ul>
			</div>
			<div>
				{typeFavorite === 1 &&
					<div>
						{charactersF.arr.length ? <CardFavorites array={charactersF.arr}/> : <span>Emprty List</span> }
					</div>
				}
				{typeFavorite === 2 &&
					<div>
						{locationsF.arr.length ? <CardFavorites array={locationsF.arr}/> : <span>Emprty List</span>}
					</div>
				}
				{typeFavorite === 3 &&
					<div>
						{episodesF.arr.length ? <CardFavorites array={episodesF.arr}/> : <span>Emprty List</span>}
					</div>
				}
			</div>			
		</div>
	)
}
