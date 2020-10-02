import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Components/Search'
import Results from './Components/Results'
import Details from './Components/Details'

import './style.css'

function App() {


  const [type, setType] = useState("");

  const [state, setState] = useState({
    s: "",
    results: [],
    select: {}
  });

  const apiUrl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const randomType = e => {
    setType(e)


  }

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s + "&type=" + type).then(({ data }) => {
        let results = data.Search;
        console.log(results);

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openDetails = id => {
    axios(apiUrl + '&i=' + id).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, select: result }
      });
    });
  }

  const closeDetails = () => {
    setState(prevState => {
      return { ...prevState, select: {} }
    });
  }


  return (
    <div className='content'>

      <header>

        <label>O que deseja procurar??</label>
        <div className='btn'>
          <button type='button' onClick={(e) => randomType('movie')} value='false'>Filme</button>
          <button type='button' onClick={(e) => randomType('series')}>Serie</button>
        </div>
        <div className='Search'>
          <Search handleInput={handleInput} search={search} />
        </div>
      </header>
      <main>

        <div>
          <h1>Resultado da pesquisa</h1>
        </div>

        <Results results={state.results} openDetails={openDetails} />

        {(state.select.Title != null) ? <Details select={state.select} closeDetails={closeDetails} /> : false}
      </main>

    </div>
  );
}

export default App;
