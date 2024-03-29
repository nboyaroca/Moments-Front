import styled from "styled-components";


export const CtMoments = styled.div`
  /* height: 100vh; */
  padding: 2em 0 2em 0;
  /* background: linear-gradient(#283954, #9fc3e3); */
  /* background-color: #8b9ab3; */
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-row-gap: 2em;
  justify-content: space-evenly;
  
  @media screen and (max-width: 1085px) {
    grid-template-columns: 30% 30% 30%;
    justify-items: center;
    /* height: 100vh; */
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 45% 45%;
    justify-items: center;
    /* height: auto; */
  }

  @media screen and (max-width: 490px) {
    grid-template-columns: 90%;
    justify-items: center;
    /* height: auto; */
    padding-bottom: 7rem;
  }
`;

export const CtCreate = styled.div`
  /* border: 2px solid blue; */
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(110, 110, 110));
  transition-duration: 0.25s;
  background-color: #bfcce1;
  &:hover {
    box-shadow: 0 0 25px rgb(225, 236, 249);
  }
`;

export const BtCreate = styled.button`
  width: auto;
  height: auto;
  flex: auto;
  border: none;
  background-color: transparent;
  color: #282a2d;
  top: 1.5%;
  right: 3%;
  transition-duration: 0.25s;
  cursor: pointer;
  &:hover {
    background-color: #a6afcd;
    color: #7881a1;
  }
`;



//falta estilar el search
export const CtSearch = styled.div`
width: 100%;
background-color: #062249;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: 10%;
position: relative;
`;

