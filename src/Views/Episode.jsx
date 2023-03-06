import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

import { GET_EPISODE } from '../Graphql/Querys'

export default function Episode() {
  const {id} = useParams()
	const navigate = useNavigate()

	const [getEpisode, result] = useLazyQuery(GET_EPISODE)

	useEffect(()=>{
		getEpisode({variables:{id:id}})
	},[])

	return (
		<div>
			<h1>Episode Info</h1>
			{!result.data ? <span>Loading...</span> :
				<div>
					<h2>{result.data.episode.name}</h2>
					<hr />
					<p> <b>Air Date</b> : {result.data.episode.air_date} </p>
					<p> <b>Episode Code</b> : {result.data.episode.episode} </p>
					<p> <b>Characters</b> : </p> {
            <ul>
              {result.data.episode.characters.map((chrt) => (
                <li key={chrt.id}>{chrt.name}</li>
              ))}
            </ul>
          }
				</div>
			}
			<button onClick={() => navigate('/episodes')}>Return to Characters</button>
		</div>
	)
}
