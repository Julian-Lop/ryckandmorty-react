import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Cards from '../Components/Cards'
import Pagination from '../Components/Pagination'

//Querys
import { CHARACTERS_PAGE_FILTER } from '../Graphql/Querys'

//Actions
import { getCharacterFavorites } from '../Redux/Reducers/charactersSlice'
import { getFilters, addFilters, deleteFilters } from '../Redux/Reducers/filtersCharactersSlice'

export default function Characters() {
	const dispatch = useDispatch()

	const [getCharactersPage,result] = useLazyQuery(CHARACTERS_PAGE_FILTER)

	const filters = useSelector((state) => state.filtersCharacters)

	const [currentPage, setCurrentPage] = useState(1)
	const [pages, setPages] = useState(false)
	const [next, setNext] = useState(1)
	const [prev, setPrev] = useState(1)
	const [filter, setFilter] = useState({})

	const setPage = (pag) => {
		getCharactersPage({variables: {...filter, pag:pag}})
		setCurrentPage(pag)
	}

	const deleteFil = () => {
		dispatch(deleteFilters())
	}

	useEffect(() => {
		if(result.data){
			setPages(result.data.characters.info.pages)
			setNext(result.data.characters.info.next)
			setPrev(result.data.characters.info.prev)
		}
	}, [result])

	useEffect(()=>{
		dispatch(getFilters())
		dispatch(getCharacterFavorites())
	},[])

	useEffect(() => {
		if(filters){
			setFilter(filters)
		}
	},[filters])

	useEffect(() => {
		if(filter){
			setPage(1)
		}
	},[filter])

	const filterChange = (e) => {
		setFilter({
			...filter,
			[e.target.name] : e.target.value
		})
		dispatch(addFilters({[e.target.name]: e.target.value}))
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
				<input type="text" id='nameF' name='nameF' placeholder='Name..' value={filter.nameF} onChange={(e) => filterChange(e)} />
				<input type="text" id='stat' name='stat' placeholder='Status..' value={filter.stat} onChange={(e) => filterChange(e)} />
				<input type="text" id='typ' name='typ' placeholder='Type..' value={filter.typ} onChange={(e) => filterChange(e)} />
				<input type="text" id='gen' name='gen' placeholder='Gender..' value={filter.gen} onChange={(e) => filterChange(e)} />
			</div>
			<div style={{width:'200px',margin:'10px auto 10px auto',display:'flex',justifyContent:'space-around'}}>
				<button onClick={() => submitFilter()}>Filter</button>
				<button onClick={() => deleteFil()} style={{color:'red'}} >Delete</button>
			</div>
			<div>
				<Pagination pages={pages} current={currentPage} next={next} prev={prev} setPage={setPage} />
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
