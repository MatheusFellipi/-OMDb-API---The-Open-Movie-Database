import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, ToggleButton, Modal, Button } from 'react-bootstrap';



export const ContentDetalhes = styled(Modal)`
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,0.80)100%);

`;
export const ContentDetalhesHeader = styled(Modal.Header)`
display:flex;
justify-content:space-between;
align-items:center;
background-color: #3B3B39;


`;

export const DetalhesBody = styled(Modal.Body)`
background-color: #3B3B39;
width: 100vw;
height:90vh;
max-width: 960px;
margin: 0 auto;
padding: 25px;

color: #FFF;

`;
export const DetalhesTitle = styled(Modal.Title)`
background-color: #3B3B39;
font-family:${(props) => props.theme.fonts.bold};
font-size:24px;


`;
export const DetalhesTexto = styled.p`
margin:20px 0 0 20px;
font-family:${(props) => props.theme.fonts.regular};
font-size:22px;


`;
export const DetalhesImg = styled.img`
flex: 1 1 50%;
max-width: 300px;
padding: 0px 15px;
`;
export const DetalhesSpan = styled.span`
font-family:${(props) => props.theme.fonts.Light};
font-size: 16px;
margin-left:10px;

`;
export const ContentePlot = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
`;
export const ContentInfo = styled.div`
display:flex;
flex-direction:column;

margin-top:20px;
`;
export const Buttons = styled(Button)`
display:flex;
justify-content:end;
align-items:flex-end;
background-color:red;

`;

export const ContentStart = styled.div`
margin-left:15px;

`;