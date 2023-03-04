import React from 'react'
import {gql, useQuery} from '@apollo/client'
import Cards from '../Components/Cards'

export default function Locations() {

  const ALL_LOCATIONS = gql`
    query {
      locations {
        info {
          count
					next
					prev
					pages
        },
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `
  const {data, error, loading} = useQuery(ALL_LOCATIONS)

  if (error) return <span style='color: red'>{error}</span>

  return (
    <div>
      {loading ? <p>Loading...</p> :
        (
          <>
            <h1>Locations</h1>
            {data && data.locations &&
							(<Cards array={data.locations} />)
            }
            <hr />
          </>
        )
      }
    </div>
  )
}
