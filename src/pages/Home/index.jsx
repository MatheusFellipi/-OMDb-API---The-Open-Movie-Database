import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios'

import { Search, Results, Detalhes } from '../../components'

import {
  Headers, Contents, Title, TitleH1, TitleSpan, ContentForms,
  ContentsResults
} from './styled'


function Home() {
  const apiURL = "http://www.omdbapi.com/?apikey=" + process.env.REACT_APP_KEY


  const [buttonValue, setButtonValue] = useState('');
  const [show, setShow] = useState(false);
  const [selecionar, setSelecionar] = useState({})
  const [type, setType] = useState('');
  const [state, setState] = useState({
    s: "",
    results: [],
  })

  const btn = [
    { name: 'Filmes', value: '1' },
    { name: 'Series', value: '2' },
  ];


  useEffect(() => {
    if (type == 'movie' || type == 'series') {
      console.log(type);
      axios(apiURL + "&s=" + state.s + "&type=" + type).then(({ data }) => {
        let results = data.Search;
        console.log(results);

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }

  }, [state.s])

  const handleInput = (e) => {
    let s = e.target.value;


    setState(prevState => {
      return { ...prevState, s: s }
    })
  }

  const MudarTipo = (e) => {
    let typeName = e.target.value
    if (typeName == 1) {
      setType('movie')
      console.log('movie');
    } else if (typeName == 2) {
      console.log('series');
      setType('series')
    }
  }

  const openModal = id => {
    console.log(id);
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let results = data;
      console.log(results);
      setSelecionar(results)
      setShow(true);
    })

  }

  const closeModal = () => {
    setSelecionar({})
    setShow(false);

  }
  return (

    <Contents>
      <Headers >

        <Title>
          <TitleH1>está atrás de algo interessante pra ver?</TitleH1>
          <TitleSpan>Procure aqui!!,escolhe o que deseja procurar nos butões</TitleSpan>

        </Title>
        <ContentForms>

          <ButtonGroup toggle>
            {btn.map((btn, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="dark"
                name="radio"

                value={btn.value}
                onClick={MudarTipo}
                checked={buttonValue === btn.value}
                onChange={(e) => setButtonValue(e.currentTarget.value)}
              >
                {btn.name}
              </ToggleButton>
            ))}
          </ButtonGroup>

          <Search handleInput={handleInput} />
        </ContentForms>

      </Headers>
      <ContentsResults>

        <Results results={state.results} openModal={openModal} />

      </ContentsResults>

      <Detalhes show={show} selecionar={selecionar} closeModal={closeModal}/>
    </Contents>
  );
}

export default Home;
