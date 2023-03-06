import React from 'react'
import Card from './Subcomponents/Card'

export default function CardFavorites({array,type}) {
	return (
		<div>
				{array.map((data) => (
					<Card data={data} key={data.id} type={type} />
				))}
		</div>
	)
}

