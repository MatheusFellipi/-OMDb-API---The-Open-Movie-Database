import React, { useState,useEffect } from 'react'
import axios from 'axios'

import Search from './Components/Search'
import Results from './Components/Results'

import  './style.css'

function App() {


const [type, setType] = useState("");

const [state, setState] = useState({
    s: "",
    results: []
  });

  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const randomType = e =>{
    setType(e)

    
  }

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s + "&type=" + type ).then(({ data }) => {
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


  return ( 
  <div className='content'>
        
    <header>

    <div className='btn'>
       <button type='button' onClick={(e) => randomType('movie')} value='false'>Filme</button>
       <button type='button' onClick={(e) => randomType('series')}>Serie</button>
    </div>

    <div className='Search'>
      <Search handleInput={handleInput} search={search} />
    </div>
    </header>


    <main>
      <Results results={state.results}/>

    </main>

  </div>
  );
}

export default App;
