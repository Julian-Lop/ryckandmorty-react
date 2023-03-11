import React from 'react'

export default function Pagination({pages,current,prev,next,setPage}) {
	
	const arrayPag = (num) => {
		let arr = []
		for (let i = 0; i < num; i++) {
			arr.push(i)
		}
		return arr
	}
	
	return (
		<div className='Pagination'>
			<button className='btnArrow' disabled={current == 1} onClick={() => setPage(prev)}><i className="fas fa-angle-left"></i></button>
			{arrayPag(pages).map((pg) => {
					if(current == pages)return (pg+1 > pages-3) && (pg+1 === current ? 
						(<span key={pg} className='PagNumber active'>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} className='PagNumber'>{pg+1}</span>)
						)
				 	if(current > 2 && current < pages) return ((pg < next)) && ((pg > next-4)) && (pg+1 === current ? 
						(<span key={pg} className='PagNumber active'>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} className='PagNumber'>{pg+1}</span>)
						)
					if(pg == 0 || pg == 1 || pg == 2) return (pg+1 === current ? 
						(<span key={pg} className='PagNumber active'>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} className='PagNumber'>{pg+1}</span>)
						)
					}
			)}
			<button className='btnArrow' disabled={current == pages} onClick={() => setPage(next)}><i className="fas fa-angle-right"></i></button>
		</div>
	)
}
