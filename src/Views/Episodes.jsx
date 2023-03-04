import React from 'react'
import {gql, useQuery} from '@apollo/client'
import Cards from '../Components/Cards'

export default function Episodes() {

  const ALL_EPISODES = gql`
    query {
      episodes {
				info {
					count
					next
					prev
					pages
				},
				results {
					id
					name
          air_date
      		episode
				}
			}
    }
  `
  const {data, error, loading} = useQuery(ALL_EPISODES)

	if (error) return <span style='color: red'>{error}</span>

  return (
    <div>
			{loading ? <p>Loading...</p> :
        (
          <>
            <h1>Episodes</h1>
            {data && data.episodes &&
							(<Cards array={data.episodes} />)
            }
            <hr />
          </>
        )
      }
		</div>
  )
}
