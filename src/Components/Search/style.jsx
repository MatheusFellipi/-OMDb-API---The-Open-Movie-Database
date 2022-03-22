import styled from 'styled-components'

export const Input = styled.input.attrs({
  type: 'text',
})`
  font-family: 'Roboto, sans-serif;';
  font-size: 400;
  outline: none;
  border: none;
  width: 27rem;
  height: 2.5rem;
  font-size: 1rem;
  margin:0 20px 0 20px;
  padding:15px;
  background-color: ${(props) => props.theme.colors.input_background};
  border-radius:10px;
  ::placeholder {
    color: ${(props) => props.theme.colors.apoio};
  }
  
`;
