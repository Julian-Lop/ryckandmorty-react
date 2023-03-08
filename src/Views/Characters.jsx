import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch } from 'react-redux'

//Components
import Cards from '../Components/Cards'
import Pagination from '../Components/Pagination'

//Querys
import { CHARACTERS_PAGE_FILTER } from '../Graphql/Querys'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'

export default function Characters() {
	const dispatch = useDispatch()

	const [getCharactersPage,result] = useLazyQuery(CHARACTERS_PAGE_FILTER)
	const [currentPage, setCurrentPage] = useState(1)
	const [filter, setFilter] = useState({})

	const setPage = (pag) => {
		filter.pag = pag
		getCharactersPage({variables: filter})
		setCurrentPage(pag)
	}

	let pages = result?.data?.characters?.info.pages || false
	let next = result?.data?.characters?.info.next || 1
	let prev = result?.data?.characters?.info.prev || 1

	useEffect(()=>{
		setPage(1)
		dispatch(getCharacterFavorites())
	},[])

	const filterChange = (e) => {
		setFilter({
			...filter,
			[e.target.name] : e.target.value
		})
	}

	const submitFilter = () => {
		let filterFinally = filter
		getCharactersPage({variables: filterFinally})
		setCurrentPage(1)
	}

	return (
		<div>
			<h1>Characters</h1>
			<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
				<input type="text" id='nameF' name='nameF' placeholder='Name..' onChange={(e) => filterChange(e)} />
				<input type="text" id='stat' name='stat' placeholder='Status..' onChange={(e) => filterChange(e)} />
				<input type="text" id='typ' name='typ' placeholder='Type..' onChange={(e) => filterChange(e)} />
				<input type="text" id='gen' name='gen' placeholder='Gender..' onChange={(e) => filterChange(e)} />
			</div>
			<div style={{margin:'10px'}}>
				<button onClick={() => submitFilter()}>Filter</button>
			</div>
			<div>
				{pages && <Pagination pages={pages} current={currentPage} next={next} prev={prev} setPage={setPage} />}
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
