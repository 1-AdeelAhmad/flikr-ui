import styled from "styled-components";

export const Container = styled.div`
   background: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.textColor};
   height: 100vh;
`;

export const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
`;

export const AppBar = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: fixed;
   top: 0;
   background: ${(props) => props.theme.colors.cardBackground};
   box-shadow: ${(props) => props.theme.colors.card.boxShadow}
   height: 180px;
   padding: 10px;
   width: 100%;

   & ${Title}
`;

export const Gallery = styled.div`
   background: ${(props) => props.theme.colors.background};
   padding-top: 200px;
`;

export const Scroll = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-top: 20px;
   margin-bottom: 80px;
`;

export const SearchInput = styled.input`
   font-size: 0.75em;
   height: auto;
   padding: 10px;
   margin: 10px;
   border: none;
   border-radius: 15px;
   ::placeholder {
      color: light-gray;
   }
`;

export const SearchButton = styled.button`
   height: auto;
   padding: 10px;
   font-size: 0.75em;
   border-radius: 15px;
`;

export const PhotoCard = styled.div`
   display: flex-column;
   width: 150px;
   height: auto;
   border-radius: 20px;
   background: ${(props) => props.theme.colors.cardBackground};
   box-shadow: ${(props) => props.theme.colors.card.boxShadow}
   margin: 0 auto;
   padding: 10px;
   margin: 10px;

   &:hover {
      background: ${(props) => props.theme.colors.card.hover.background}
      box-shadow: ${(props) => props.theme.colors.card.hover.boxShadow}
   }
`;

export const Author = styled.a`
   font-size: 0.65em;
   display: block;
   margin: 2px;
   color: ${(props) => props.theme.colors.card.link};
`;

export const By = styled.span`
   font-size: 0.65em;
   font-style: italic;
   display: block;
   color: ${(props) => props.theme.colors.textColor};
   margin: 5px;
`;

export const PhotoCardTitleLink = styled.a`
   font-size: 0.85em;
   color: ${(props) => props.theme.colors.card.link};
`;

export const PhotoCardTitle = styled.h3`
   font-size: 0.85em;
   text-align: center;
   color: black;
   & ${Author} & ${By} & ${PhotoCardTitleLink}
`;

export const PhotoCardImage = styled.img`
   border-radius: 15px 15px 2px 2px;
   background-color: green;
   width: 100%;
   height: 120px;
`;

export const PhotoCardDesc = styled.p`
   font-size: 0.75em;
   text-align: center;
   word-wrap: break-word;
   padding: 5px;
`;

export const PhotoCardTags = styled.section`
   font-style: italic;
   font-size: 0.6em;
   text-align: center;
   display: flex;
   flex-direction: row;
   justify-content: center;
   text-align: center;
`;
export const PhotoCardTagLink = styled.a`
   margin: 1px;
   text-decoration: none;
`;

export const Loading = styled.section`
   display: flex;
   justify-content: center;
   font-size: 1em;
   text-align: center;
   margin: 20px;
`;

export const Button = styled.button`
   background: ${(props) => props.theme.colors.buttonBackground};
   color: ${(props) => props.theme.colors.buttonColor};
   display: block;
   margin-top: 24px;
   margin-bottom: 24px;
   max-width: 100%;
   border: none;
   line-height: 36px;
   padding: 0 12px;
   border-radius: 4px;
   font-size: 14px;
   cursor-pointer;
`;
