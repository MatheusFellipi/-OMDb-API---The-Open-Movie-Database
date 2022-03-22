import React from "react";
import { ImgResults, Title, Container } from "./styled";

function Resutados({ results, openModal }) {
  return (
    <Container onClick={() => openModal(results.imdbID)}>
      <ImgResults
        src={
          results.Poster === "N/A"
            ? "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?s=612x612"
            : results.Poster
        }
        alt={results.Title}
      />
      <Title>{results.Title}</Title>
    </Container>
  );
}
export default Resutados;
