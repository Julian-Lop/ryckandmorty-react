import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Cards from '../Components/Cards'
import Pagination from '../Components/Pagination'

//Querys
import { LOCATIONS_PAGE_FILTER } from '../Graphql/Querys'
//Actions
import { getLocationFavorites } from '../Redux/Reducers/locationsSlice'
import { getFilters, addFilters, deleteFilters } from '../Redux/Reducers/filtersLocationsSlice'

export default function Locations() {
  const dispatch = useDispatch()

	const [getLocationsPage,result] = useLazyQuery(LOCATIONS_PAGE_FILTER)

	const filters = useSelector((state) => state.filtersLocations)

  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState(false)
	const [next, setNext] = useState(1)
	const [prev, setPrev] = useState(1)
	const [filter, setFilter] = useState({})

  const setPage = (pag) => {
    getLocationsPage({variables: {...filter, pag:pag}})
    setCurrentPage(pag)
  }

	const deleteFil = () => {
		dispatch(deleteFilters())
	}
  
	useEffect(() => {
		if(result.data){
			setPages(result.data.locations.info.pages)
			setNext(result.data.locations.info.next)
			setPrev(result.data.locations.info.prev)
		}
	}, [result])

	useEffect(()=>{
		dispatch(getFilters())
    dispatch(getLocationFavorites())
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
		getLocationsPage({variables: filterFinally})
		setCurrentPage(1)
	}

  return (
    <div>
      <h1>Locations</h1>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
				<input type="text" id='nameF' name='nameF' value={filter.nameF} placeholder='Name..' onChange={(e) => filterChange(e)} />
				<input type="text" id='typ' name='typ' value={filter.typ} placeholder='Type..' onChange={(e) => filterChange(e)} />
        <input type="text" id='dimen' name='dimen' value={filter.dimen} placeholder='Dimension..' onChange={(e) => filterChange(e)} />
			</div>
			<div style={{margin:'10px'}}>
				<button onClick={() => submitFilter()}>Filter</button>
				<button onClick={() => deleteFil()} style={{color:'red'}} >Delete</button>
			</div>
			<div>
      <Pagination pages={pages} current={currentPage} next={next} prev={prev} setPage={setPage} />
			</div>
      {!result.data ? <p>Loading...</p> :
        (
          <>
            {result.data.locations &&
							(<Cards array={result.data.locations} type={'locations'}/>)
            }
            <hr />
          </>
        )
      }
    </div>
  )
}
