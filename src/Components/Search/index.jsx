import React from "react";
import { Input } from "./style";

function Search({ handleInput, place }) {
  return <Input type="text" onChange={handleInput} placeholder={place} />;
}

export default Search;
