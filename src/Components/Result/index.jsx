import React from 'react'
import { ImgResults } from './styled'

function Resutados({ results, openModal }) {
  return (
    <div onClick={() => openModal(results.imdbID)}>
      <ImgResults src={results.Poster} alt={results.Title} />
    </div>
  )
}
export default Resutados;