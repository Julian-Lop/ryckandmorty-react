import React from 'react'
import Card from './Subcomponents/Card'

export default function CardFavorites({array}) {
	return (
		<div>
				{array.map((data) => (
						<Card data={data} key={data.id} />
				))}
		</div>
	)
}

