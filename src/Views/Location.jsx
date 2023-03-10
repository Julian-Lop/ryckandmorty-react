import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

import Loader from '../Components/Subcomponents/Loader'

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
		<div className='Individual'>
			<h1>Location Info</h1>
			{!result.data ? <Loader/> :
				<div className='container'>
					<div className='boxIndividual'>
						<span></span>
						<div className='contentI'>
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
					</div>
				</div>
			}
			<button className='btn3' onClick={() => navigate('/locations')}>Return to Locations</button>
		</div>
	)
}
