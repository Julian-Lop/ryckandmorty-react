import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch } from 'react-redux'

//Components
import Cards from '../Components/Cards'

//Querys
import { CHARACTERS_PAGE } from '../Graphql/Querys'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'

export default function Characters() {
	const dispatch = useDispatch()

	const [getCharactersPage,result] = useLazyQuery(CHARACTERS_PAGE)
	const [currentPage, setCurrentPage] = useState(1)

	const setPage = (pag) => {
		getCharactersPage({variables: {pag: pag}})
		setCurrentPage(pag)
	}

	let next = result?.data?.characters?.info.next || 1
	let prev = result?.data?.characters?.info.prev || 1

	useEffect(()=>{
		setPage(1)
		dispatch(getCharacterFavorites())
	},[])

	return (
		<div>
			<h1>Characters</h1>
			<div>
				<button onClick={() => setPage(prev)}>prev</button>
				<span style={{marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px',background:'#fefefe',color:'#000000'}}>{currentPage}</span>
				<button onClick={() => setPage(next)}>next</button>
			</div>
			{!result.data ? <p>Loading...</p> :
				(
					<>
						{ result.data.characters &&
							(<Cards array={result.data.characters} type={'characters'} />)
						}
						<hr />
					</>
				)
			}
		</div>
	)
}
