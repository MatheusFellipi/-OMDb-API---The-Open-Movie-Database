import React from 'react'

function Details({ select, closeDetails }) {
    return (
        <div className='details'>
            <div className='content'>
                
                <img src={select.Poster} />
                <h2>{select.Title} <span>{select.Year}</span></h2>
                <p className='score'> Avaliação {select.imdbRating}</p>
                <h2>{select.Awards}</h2>
                <h2>{select.Released}</h2>
                <h2>{select.Runtime}</h2>
                <p className='plot'> {select.Plot}</p>
            </div>
            <button className='close' onClick={closeDetails}>Fechar</button>
        </div>

    );
}

export default Details;