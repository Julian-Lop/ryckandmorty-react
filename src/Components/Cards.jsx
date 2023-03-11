import React from 'react'
import Card from './Subcomponents/Card'

export default function Cards({array,type}) {
	return (
		<div className='Cards'>
				{array?.results.map((data) => (
						<Card data={data} key={data.id} type={type} />
				))}
		</div>
	)
}
