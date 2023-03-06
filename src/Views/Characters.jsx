import React, { useEffect } from 'react'
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

	const setPage = (pag) => {
		getCharactersPage({variables: {pag: pag}})
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
			{!result.data ? <p>Loading...</p> :
				(
					<>
						<div>
							<button onClick={() => setPage(prev)}>prev</button>
							<button onClick={() => setPage(next)}>next</button>
						</div>
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
