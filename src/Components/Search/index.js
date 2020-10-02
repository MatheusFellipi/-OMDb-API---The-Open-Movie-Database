import React from 'react'
import './style.css'

function Search ({ handleInput, search }) {
	return (
		<div className='search-box'>
			<input className='search'
				type="text" 
				placeholder="Pesquisa um filmes ou series: 'batman', 'pressione enter'" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</div>
	)
}

export default Search
