import styled from "styled-components";

export const CtNavbar = styled.div`
  background: linear-gradient(#4E87BE, #062249);
  border-bottom: solid 2px #062249;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  z-index: 1; */
  width: 100vw;
  margin-top: -1;
  color: white;
  display: flex;
  justify-content: space-around;
`;

export const CtLogo = styled.div`
width: 50%;
display: flex;
justify-content: left;
align-items: center;
overflow: hidden;
`;

export const Logo = styled.img`
  height: 60px;
  display: flex;
  justify-content: left;
  filter: invert(89%) sepia(3%) saturate(1768%) hue-rotate(185deg) brightness(92%) contrast(90%);
  stroke-width:.5;
  fill-opacity:0;
`;

export const BtMain = styled.button`
  /* width: 3.5em;
  height: 2.25em; */
  background-color: transparent;
  border: none;
  color: #bfcce1;
  padding-left: 1rem;
  transition-duration: 0.25s;
  cursor: pointer;
  font-family: "Stick No Bills";
  font-size: 1em;
  &:hover {
    font-size:2em;
    /* color: #b9f2ff; */
    color: #7881a1;
  }
  
  @media screen and (max-width: 1085px) {
    justify-content: center;
  }

  @media screen and (max-width: 490px) {
    justify-content: center;
  }
`;

export const CtSearch = styled.form`
width: 80%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: 10%;
position: relative;
`;

export const InputSearch = styled.input`
width: 90%;
height: 5vh;
min-width: 10rem;
padding: 0 5% 0 5%;
border: none;
border-radius: 1.5rem;
outline: none;
font-size: 1em;
color: #7881a1;
background-color: #bfcce1;
--webkit-backdrop-filter: blur( 0.7rem);
/* position: relative; */

@media screen and (max-width: 1085px) {
    background-color: transparent;
    color: transparent;
  }

  @media screen and (max-width: 490px) {
    background-color: transparent;
    color: transparent;
  }

`;

export const BtSearch = styled.button`
background: none;
border: none;
color: #bfcce1;
/* position: absolute; */

cursor: pointer;
&:hover {
    /* font-size: 1em; */
    transition: all 0.2s ease-in-out;
    color: #b9f2ff;
}
`;

export const CtMenu = styled.div`
  border: none;
  background-color: transparent;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;

export const BtNavbar = styled.button`
  width: 3.5em;
  height: 2.25em;
  border: none;
  border-radius: 10%;
  background-color: #7881a1;
  color: #bfcce1;
  top: 1.5%;
  right: 3%;
  transition-duration: 0.25s;
  cursor: pointer;
  font-family: "Stick No Bills";
  font-size: 1em;
  &:hover {
    background-color: #a6afcd;
    color: #7881a1;
  }
  
  @media screen and (max-width: 1085px) {
    background-color: transparent;
    color: transparent;
  }

  @media screen and (max-width: 490px) {
    background-color: transparent;
    color: transparent;
  }

`;
