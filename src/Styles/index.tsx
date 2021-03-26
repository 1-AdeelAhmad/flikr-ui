import styled from "styled-components";

export const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
`;

export const AppBar = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: sticky;
   top: 0;
   background: linear-gradient(145deg, #b9b9b9, #9c9c9c);
   box-shadow: 5px 5px 10px #727272, -5px -5px 10px #e8e8e8;
   height: auto;
   padding: 10px;
   width: 100%;

   & ${Title}
`;

export const Gallery = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-top: 20px;
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

export const PhotoCard = styled.section`
   display: flex-column;
   width: 150px;
   height: auto;
   border-radius: 20px;
   background: #e0e0e0;
   box-shadow: 5px 5px 6px #8b8b8b, -5px -5px 6px #ffffff;
   margin: 0 auto;
   padding: 10px;
   margin: 10px;

   &:hover {
      background: linear-gradient(145deg, #c1d3e6, #e5faff);
      box-shadow: 5px 5px 6px #85919e, -5px -5px 6px #ffffff;
   }
`;

export const Author = styled.a`
   font-size: 0.65em;
   display: block;
   margin: 2px;
`;

export const By = styled.span`
   font-size: 0.65em;
   font-style: italic;
   display: block;
`;

export const PhotoCardTitleLink = styled.a`
   font-size: -0.85em;
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
   margin: 0 auto;
`;
