import React from 'react'

import './style.css'

function Results ({ results }) {
	if(!results){
		return (
			<div>
				<h1> nao encontrado</h1>
			</div>
		)
	}else {
		return (
			<div  className="box-results">
				{results.map(result => (
						<div key={result.imdbID} className='card'>
						<img src={result.Poster}  />
						<h3>{result.Title} <br/>
						{result.Year} <br/>
						{result.Type}</h3>
								
					</div>
				))}
			</div>
		)
	}
	
}

export default Results
