import React, { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { useDispatch } from 'react-redux'

//Components
import Cards from '../Components/Cards'

//Querys
import { EPISODES_PAGE_FILTER } from '../Graphql/Querys'
//Actions
import { getEpisodeFavorites } from '../Redux/Reducers/episodesSlice'

export default function Episodes() {
  const dispatch = useDispatch()

  const [getEpisodesPage,result] = useLazyQuery(EPISODES_PAGE_FILTER)
  const [currentPage, setCurrentPage] = useState(1)
	const [filter, setFilter] = useState({})

  const setPage = (pag) => {
    filter.pag = pag
    getEpisodesPage({variables: filter})
    setCurrentPage(pag)
  }

  let next = result?.data?.episodes?.info.next || 1
	let prev = result?.data?.episodes?.info.prev || 1

	useEffect(()=>{
		setPage(1)
    dispatch(getEpisodeFavorites())
	},[])

  const filterChange = (e) => {
		setFilter({
			...filter,
			[e.target.name] : e.target.value
		})
	}

  const submitFilter = () => {
		let filterFinally = filter
		getEpisodesPage({variables: filterFinally})
		setCurrentPage(1)
	}

  return (
    <div>
      <h1>Episodes</h1>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
				<input type="text" id='nameF' name='nameF' placeholder='Name..' onChange={(e) => filterChange(e)} />
				<input type="text" id='episo' name='episo' placeholder='EpisodeCode..' onChange={(e) => filterChange(e)} />
			</div>
			<div style={{margin:'10px'}}>
				<button onClick={() => submitFilter()}>Filter</button>
			</div>
			<div>
				<button onClick={() => setPage(prev)}>prev</button>
				<span style={{marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px',background:'#fefefe',color:'#000000'}}>{currentPage}</span>
				<button onClick={() => setPage(next)}>next</button>
			</div>
			{!result.data ? <p>Loading...</p> :
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
