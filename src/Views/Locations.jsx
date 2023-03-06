import React, { useEffect } from 'react'
import {useLazyQuery} from '@apollo/client'

//Components
import Cards from '../Components/Cards'

//Querys
import { LOCATIONS_PAGE } from '../Graphql/Querys'

export default function Locations() {
  const [getLocationsPage,result] = useLazyQuery(LOCATIONS_PAGE)

  const setPage = (pag) => {
    getLocationsPage({variables: {pag:pag}})
  }

  let next = result?.data?.locations?.info.next || 1
	let prev = result?.data?.locations?.info.prev || 1

	useEffect(()=>{
		setPage(1)
	},[])

  return (
    <div>
      <h1>Locations</h1>
      {!result.data ? <p>Loading...</p> :
        (
          <>
            <div>
							<button onClick={() => setPage(prev)}>prev</button>
							<button onClick={() => setPage(next)}>next</button>
						</div>
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
