import React, { useEffect, useState } from "react";
import { Search, Results, Detalhes } from "../../Components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

import {
  Headers,
  Contents,
  Title,
  TitleH1,
  TitleSpan,
  ContentForms,
  ContentsResults,
} from "./styled";

function Home() {
  const [buttonValue, setButtonValue] = useState("");
  const [show, setShow] = useState(false);
  const [selecionar, setSelecionar] = useState({});
  const [type, setType] = useState("");
  const [state, setState] = useState({
    s: "",
    results: [],
  });
  const btn = [
    { name: "Filmes", value: "1", color: "dark" },
    { name: "Series", value: "2", color: "dark" },
    { name: "Limpar", value: "3", color: "danger" },
  ];

  useEffect(() => {
    fetch(process.env.REACT_APP_KEY + "&s=" + state.s + "&type=" + type)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      })
      .catch((rejected) => {});
  }, [state.s, type]);

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const MudarTipo = (e) => {
    let typeName = e.target.value;

    if (typeName === 1) setType("movie");
    else if (typeName === 2) setType("series");
    else if (typeName === 3) {
      console.log("oi");
      setType("");
      setState({
        s: "",
        results: [],
      });
    }
  };

  const openModal = (id) => {
    fetch(process.env.REACT_APP_KEY + "&i=" + id)
      .then((res) => res.json())
      .then((data) => {
        let results = data;
        setSelecionar(results);
        setShow(true);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  const closeModal = () => {
    setSelecionar({});
    setShow(false);
  };

  return (
    <Contents>
      <Headers>
        <Title>
          <TitleH1>Pesquisa filmes/series</TitleH1>
        </Title>
        <ContentForms>
          <ButtonGroup toggle>
            {btn.map((btn, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant={btn.color}
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

          <Search
            handleInput={handleInput}
            place={"Pesquisa filme ou serie ex:Batman"}
          />
        </ContentForms>
      </Headers>

      <ContentsResults>
        <Results results={state.results} openModal={openModal} />
      </ContentsResults>

      <Detalhes show={show} selecionar={selecionar} closeModal={closeModal} />
    </Contents>
  );
}

export default Home;
