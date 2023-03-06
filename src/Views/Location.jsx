import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

//Querys
import { GET_LOCATION } from '../Graphql/Querys'

export default function Location() {
  const {id} = useParams()
	const navigate = useNavigate()

	const [getLocation, result] = useLazyQuery(GET_LOCATION)

	useEffect(()=>{
		getLocation({variables:{id:id}})
	},[])

	return (
		<div>
			<h1>Location Info</h1>
			{!result.data ? <span>Loading...</span> :
				<div>
					<h2>{result.data.location.name}</h2>
					<hr />
					<p> <b>Type</b> : {result.data.location.type} </p>
					<p> <b>Dimension</b> : {result.data.location.dimension} </p>
					<p> <b>Residents</b> :</p> {
            <ul>
              {result.data.location.residents.map((resident) => (
                <li key={resident.id}>{resident.name}</li>
              ))}
            </ul>
          }
				</div>
			}
			<button onClick={() => navigate('/locations')}>Return to Characters</button>
		</div>
	)
}
