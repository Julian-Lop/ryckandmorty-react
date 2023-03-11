import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Components
import CardFavorites from '../Components/CardFavorites'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'
import { getLocationFavorites } from '../Redux/Reducers/locationsSlice'
import { getEpisodeFavorites } from '../Redux/Reducers/episodesSlice'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Favorites() {
	const user = useUser()

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
	
	useEffect(()=>{
		if(user.data){
      const marker = document.querySelector('#marker2')

      const item = document.querySelectorAll('.Tab')

      function Indicator(e){
        marker.style.left = e.offsetLeft+'px'
        marker.style.width = e.offsetWidth+'px'
      }

      function ReturnInd(){
        const itemSelect = document.querySelector('.Tab.activeF')
        marker.style.left = itemSelect.offsetLeft+'px'
        marker.style.width = itemSelect.offsetWidth+'px'
      }

      item.forEach(Link => {
        Link.addEventListener('mouseover', (e) => {
          Indicator(e.target)
        })
      })

      item.forEach(Link => {
        Link.addEventListener('mouseout', (e) => {
          ReturnInd()
        })
      })
    }
	})

	return (
		<div className='Favorites'>
			<h1>Favorite Section</h1>
			<div>
				<ul className='TabSection'>
					<li className={typeFavorite == 1 ? 'Tab activeF' : 'Tab'} onClick={() => setTypeFavorite(1)}>Characters</li>
					<li className={typeFavorite == 2 ? 'Tab activeF' : 'Tab'} onClick={() => setTypeFavorite(2)}>Locations</li>
					<li className={typeFavorite == 3 ? 'Tab activeF' : 'Tab'} onClick={() => setTypeFavorite(3)}>Episodes</li>
					<div id='marker2'></div>
				</ul>
			</div>
			<div className='SectionFav'>
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
