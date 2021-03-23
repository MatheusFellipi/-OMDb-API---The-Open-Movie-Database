import styled from 'styled-components'

export const Contents = styled.div`
`;
export const Headers = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:120px;
  border-bottom: 3px solid;
  border-image-source: linear-gradient(45deg,#eb48eb,#0566e4,#430443);
  border-image-slice: 1;
  
`;
export const ContentsResults = styled.div`
  margin-top: 20px;
  display: flex;
	flex-wrap: wrap;
	margin: 0px 15px;
`;

export const ContentForms = styled.div`
  margin-top: 60px;
`;

export const Title = styled.div`
  margin-top: 80px;

`;
export const TitleH1 = styled.h1`
  margin-left: 10px;
  font-family:${(props) => props.theme.fonts.bold};
  font-size: 18px;
`;
export const TitleSpan = styled.span`
  margin-left: 240px;
  margin-top:10px;
  color:${(props) => props.theme.colors.apoio};

  font-family:${(props) => props.theme.fonts.Light};
  font-size: 16px;
`;

