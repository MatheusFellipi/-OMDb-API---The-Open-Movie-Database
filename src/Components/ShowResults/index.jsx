import React from 'react';
import Resutados from '../Result'
import { SemResultados, TextoP, ResultCard } from './styled'

export default function ShowResults({ results, openModal }) {
  return (
    <>
      {!results ?
        <SemResultados>
          <TextoP>Pesguise um filme ou serie</TextoP>
        </SemResultados> :
        <>
          {results.map(result => (

            <ResultCard key={result.imdbID}>
              <Resutados results={result} openModal={()=>openModal(result.imdbID)} />

            </ResultCard>


          ))}
        </>}
    </>
  )
}


