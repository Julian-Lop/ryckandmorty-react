import React from 'react'
import Card from './Subcomponents/Card'

export default function Cards({array}) {
	return (
		<div>
				{array?.results.map((data) => (
						<Card data={data} key={data.id} />
				))}
		</div>
	)
}
