import React, { useEffect } from 'react'
import {useLazyQuery} from '@apollo/client'

//Components
import Cards from '../Components/Cards'

//Querys
import { EPISODES_PAGE } from '../Graphql/Querys'

export default function Episodes() {
  const [getEpisodesPage,result] = useLazyQuery(EPISODES_PAGE)

  const setPage = (pag) => {
    getEpisodesPage({variables: {pag:pag}})
  }

  let next = result?.data?.episodes?.info.next || 1
	let prev = result?.data?.episodes?.info.prev || 1

	useEffect(()=>{
		setPage(1)
	},[])

  return (
    <div>
      <h1>Episodes</h1>
			{!result.data ? <p>Loading...</p> :
        (
          <>
            <div>
							<button onClick={() => setPage(prev)}>prev</button>
							<button onClick={() => setPage(next)}>next</button>
						</div>
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
