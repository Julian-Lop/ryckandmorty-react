import React from 'react'
import {gql,useQuery} from '@apollo/client'
import Cards from '../Components/Cards'

export default function Characters() {
	
	const ALL_CHARACTERS = gql`
		query {
			characters {
				info {
					count
					next
					prev
					pages
				},
				results {
					id
					name
					image
				}
			}
		}
	`
	
	const {data, error, loading} = useQuery(ALL_CHARACTERS)

	if (error) return <span style='color: red'>{error}</span>

	return (
		<div>
			{loading ? <p>Loading...</p> :
				(
					<>
						<h1>Characters</h1>
						{data && data.characters &&
							(<Cards array={data.characters} />)
						}
						<hr />
					</>
				)
			}
		</div>
	)
}
