import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Components
import CardFavorites from '../Components/CardFavorites'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'
import { getLocationFavorites } from '../Redux/Reducers/locationsSlice'
import { getEpisodeFavorites } from '../Redux/Reducers/episodesSlice'

export default function Favorites() {
	const dispatch = useDispatch()
	const charactersF = useSelector((state) => state.characters)
	const locationsF = useSelector((state) => state.locations)
	const episodesF = useSelector((state) => state.episodes)

	const [typeFavorite, setTypeFavorite] = useState(1)

	useEffect(() => {
		dispatch(getCharacterFavorites())
		dispatch(getLocationFavorites())
		dispatch(getEpisodeFavorites())
	},[])
	
	return (
		<div>
			<div style={{position:'absolute',width:'400px',left:'0',right:'0',top:'5%',bottom:'0',margin:'auto',textAlign:'center'}}>
				<h1>Favorite Section</h1>
				<ul style={{padding:'0',width:'100%',listStyle:'none',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
					<li style={{cursor:'pointer',color: typeFavorite == 1 && '#5D44FB',fontWeight:typeFavorite == 1 && 'bold'}} onClick={() => setTypeFavorite(1)}>Characters</li>
					<li style={{cursor:'pointer',color: typeFavorite == 2 && '#5D44FB',fontWeight:typeFavorite == 2 && 'bold'}} onClick={() => setTypeFavorite(2)}>Locations</li>
					<li style={{cursor:'pointer',color: typeFavorite == 3 && '#5D44FB',fontWeight:typeFavorite == 3 && 'bold'}} onClick={() => setTypeFavorite(3)}>Episodes</li>
				</ul>
			</div>
			<div style={{position:'relative',marginTop:'150px',padding:'0px',paddingTop:'20px'}}>
				{typeFavorite === 1 &&
					<div>
						{charactersF.arr.length ? <CardFavorites array={charactersF.arr} type={'characters'} /> : <span>Emprty List</span> }
					</div>
				}
				{typeFavorite === 2 &&
					<div>
						{locationsF.arr.length ? <CardFavorites array={locationsF.arr} type={'locations'}/> : <span>Emprty List</span>}
					</div>
				}
				{typeFavorite === 3 &&
					<div>
						{episodesF.arr.length ? <CardFavorites array={episodesF.arr} type={'episodes'}/> : <span>Emprty List</span>}
					</div>
				}
			</div>			
		</div>
	)
}
