import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Cards from '../Components/Cards'
import Pagination from '../Components/Pagination'
import Loader from '../Components/Subcomponents/Loader'

//Querys
import { EPISODES_PAGE_FILTER } from '../Graphql/Querys'
//Actions
import { getEpisodeFavorites } from '../Redux/Reducers/episodesSlice'
import { getFilters, addFilters, deleteFilters } from '../Redux/Reducers/filtersEpisodesSlice'

export default function Episodes() {
  const dispatch = useDispatch()

  const [getEpisodesPage,result] = useLazyQuery(EPISODES_PAGE_FILTER)
  
	const filters = useSelector((state) => state.filtersEpisodes)

	const [currentPage, setCurrentPage] = useState(1)
	const [pages, setPages] = useState(false)
	const [next, setNext] = useState(1)
	const [prev, setPrev] = useState(1)
	const [filter, setFilter] = useState({})

  const setPage = (pag) => {
    getEpisodesPage({variables: {...filter, pag:pag}})
    setCurrentPage(pag)
  }

	const deleteFil = () => {
		dispatch(deleteFilters())
	}

	useEffect(() => {
		if(result.data){
			setPages(result.data.episodes.info.pages)
			setNext(result.data.episodes.info.next)
			setPrev(result.data.episodes.info.prev)
		}
	}, [result])

	useEffect(()=>{
		dispatch(getFilters())
    dispatch(getEpisodeFavorites())
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
		getEpisodesPage({variables: filterFinally})
		setCurrentPage(1)
	}

  return (
    <div className='Episodes'>
      <h1>Episodes</h1>
      <div className='FilterSection'>
				<input className='InputFilter' type="text" id='nameF' name='nameF' value={filter.nameF} placeholder='Name..' onChange={(e) => filterChange(e)} />
				<input className='InputFilter' type="text" id='episo' name='episo' value={filter.episo} placeholder='EpisodeCode..' onChange={(e) => filterChange(e)} />
			</div>
			<div className='ButtonsFilters'>
				<button className='btn2' onClick={() => submitFilter()}>Filter</button>
				<button className='btnIcon delete' onClick={() => deleteFil()}><i className="fas fa-trash"></i></button>
			</div>
			<div>
				{pages && <Pagination pages={pages} current={currentPage} next={next} prev={prev} setPage={setPage} />}
			</div>
			{!result.data ? <Loader/> :
        (
          <>
            {result.data.episodes &&
							(<Cards array={result.data.episodes} type={'episodes'} />)
            }
            <hr />
          </>
        )
      }
		</div>
  )
}
