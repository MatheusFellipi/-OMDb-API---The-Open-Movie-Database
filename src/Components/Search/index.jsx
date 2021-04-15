import React from 'react';
import { Input } from './style'

function Search({ handleInput }) {
  return (
    <Input type='text' onChange={handleInput} />
  );
}

export default Search;