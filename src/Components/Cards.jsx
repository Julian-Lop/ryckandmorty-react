import React from 'react'
import Card from './Subcomponents/Card'

export default function Cards({array,type}) {
	return (
		<div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>
				{array?.results.map((data) => (
						<Card data={data} key={data.id} type={type} />
				))}
		</div>
	)
}
