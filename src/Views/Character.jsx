import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

//Querys
import { GET_CHARACTER } from '../Graphql/Querys'

export default function Character() {

	const {id} = useParams()
	const navigate = useNavigate()

	const [getCharacter, result] = useLazyQuery(GET_CHARACTER)

	useEffect(()=>{
		getCharacter({variables:{id:id}})
	},[])

	return (
		<div>
			<h1>Character Info</h1>
			{!result.data ? <span>Loading...</span> :
				<div>
					<h2>{result.data.character.name}</h2>
					<img src={result.data.character.image} alt={result.data.character.name+' image'} />
					<hr />
					<p> <b>Status</b> : {result.data.character.status} </p>
					<p> <b>Species</b> : {result.data.character.species} </p>
					<p> <b>Type</b> : {result.data.character.type} </p>
					<p> <b>Gender</b> : {result.data.character.gender} </p>
					<p> <b>Origin</b> : {result.data.character.origin.name} </p>
					<p> <b>Location</b> : {result.data.character.location.name} </p>
				</div>
			}
			<button onClick={() => navigate('/characters')}>Return to Characters</button>
		</div>
	)
}
