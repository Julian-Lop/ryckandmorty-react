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
		<div>
			<button disabled={current == 1} onClick={() => setPage(prev)}>prev</button>
			{arrayPag(pages).map((pg) => {
					if(current == pages)return (pg+1 > pages-3) && (pg+1 === current ? 
						(<span key={pg} style={{marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px',background:'#fefefe',color:'#000000'}}>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} style={{cursor:'pointer', marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px'}}>{pg+1}</span>)
						)
				 	if(current > 2 && current < pages) return ((pg < next)) && ((pg > next-4)) && (pg+1 === current ? 
						(<span key={pg} style={{marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px',background:'#fefefe',color:'#000000'}}>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} style={{cursor:'pointer', marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px'}}>{pg+1}</span>)
						)
					if(pg == 0 || pg == 1 || pg == 2) return (pg+1 === current ? 
						(<span key={pg} style={{marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px',background:'#fefefe',color:'#000000'}}>{pg+1}</span>)
						:
						(<span key={pg} onClick={() => setPage(pg+1)} style={{cursor:'pointer', marginLeft:'10px',marginRight:'10px',borderRadius:'50px',padding:'10px'}}>{pg+1}</span>)
						)
					}
			)}
			<button disabled={current == pages} onClick={() => setPage(next)}>next</button>
		</div>
	)
}
