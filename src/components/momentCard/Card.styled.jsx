import styled from "styled-components";


export const CtCard = styled.div`
  border: 2px solid blue;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(110, 110, 110));
  transition-duration: 0.25s;
  /* background-color: #7881a1; */
`;

export const CtImage = styled.div`
  border: 5px solid red;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  overflow-x: hidden;
`;

export const Picture = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CtInfo = styled.div`
  border: 5px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* clip-path: polygon(0% 0%, 100% 110%, 100% 100%, 0% 100%); */
  font-size: 80%;
  width: 100%;
  height: 20%;
  color: rgb(30, 30, 30);
  /* padding-left: 0.8em; */
  text-shadow: 0.1em 0.1em 0.1em #999;
`;

export const CtText = styled.div`

`;

export const TxtTitle = styled.h3`

`
