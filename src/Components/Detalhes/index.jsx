import React from 'react';
import ReactStars from "react-rating-stars-component";


import {
  ContentDetalhes, DetalhesBody, DetalhesImg, DetalhesSpan,
  DetalhesTexto, DetalhesTitle, ContentInfo, ContentePlot, ContentDetalhesHeader, Buttons, ContentStart
} from './styled';

function Detalhes({ selecionar, closeModal, show }) {

  return (
    <>
      <ContentDetalhes show={show} onHide={closeModal} enforceFocus={false}>
        <DetalhesBody>


          <ContentDetalhesHeader>
            <DetalhesTitle>{selecionar.Title} <DetalhesSpan>{selecionar.Year}</DetalhesSpan> </DetalhesTitle>

            <Buttons variant="danger" onClick={closeModal}>Fechar</Buttons>

          </ContentDetalhesHeader>
          <ContentStart>
            <ReactStars
              count={10}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
              value={selecionar.imdbRating}
            />
          </ContentStart>


          <ContentePlot>
            <>
              <DetalhesImg src={selecionar.Poster} />
            </>
            <ContentInfo>
              <DetalhesTexto >Produção:<DetalhesSpan> {selecionar.Production}</DetalhesSpan></DetalhesTexto>
              <DetalhesTexto >Altores:<DetalhesSpan> {selecionar.Actors}</DetalhesSpan></DetalhesTexto>
              <DetalhesTexto >Diretor:<DetalhesSpan> {selecionar.Director}</DetalhesSpan> </DetalhesTexto>
              <DetalhesTexto >Genero:<DetalhesSpan> {selecionar.Genre}</DetalhesSpan></DetalhesTexto>
              <DetalhesTexto >Lançamento:<DetalhesSpan> {selecionar.Released}</DetalhesSpan></DetalhesTexto>
              <DetalhesTexto >{selecionar.Plot}</DetalhesTexto>
            </ContentInfo>


          </ContentePlot>

        </DetalhesBody>
      </ContentDetalhes>
    </>
  )
}

export default Detalhes;