import React from 'react'

import './style.css'

function Results({ results, openDetails }) {
	if (!results) {
		return (
			<div className="box-results">
				<h1>Filme ou serie nao encontrado <br />
					tente pesquisa por 'Avengers'
				</h1>
			</div>
		)
	} else {
		return (
			<div className="box-results">
				{results.map(result => (
					<div key={result.imdbID} className='card' onClick={() => openDetails(result.imdbID)}>
						<img src={result.Poster} />
						<h3>{result.Title}</h3>
					</div>
				))}
			</div>
			
		)
	}

}

export default Results
