import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch } from 'react-redux'

//Components
import Cards from '../Components/Cards'
import Pagination from '../Components/Pagination'

//Querys
import { LOCATIONS_PAGE_FILTER } from '../Graphql/Querys'
//Actions
import { getLocationFavorites } from '../Redux/Reducers/locationsSlice'

export default function Locations() {
  const dispatch = useDispatch()

  const [getLocationsPage,result] = useLazyQuery(LOCATIONS_PAGE_FILTER)
  const [currentPage, setCurrentPage] = useState(1)
	const [filter, setFilter] = useState({})

  const setPage = (pag) => {
    filter.pag = pag
    getLocationsPage({variables: {pag:pag}})
    setCurrentPage(pag)
  }

  let pages = result?.data?.locations?.info.pages || false
  let next = result?.data?.locations?.info.next || 1
	let prev = result?.data?.locations?.info.prev || 1

	useEffect(()=>{
		setPage(1)
    dispatch(getLocationFavorites())
	},[])

  const filterChange = (e) => {
		setFilter({
			...filter,
			[e.target.name] : e.target.value
		})
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
				<input type="text" id='nameF' name='nameF' placeholder='Name..' onChange={(e) => filterChange(e)} />
				<input type="text" id='typ' name='typ' placeholder='Type..' onChange={(e) => filterChange(e)} />
        <input type="text" id='dimen' name='dimen' placeholder='Dimension..' onChange={(e) => filterChange(e)} />
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
