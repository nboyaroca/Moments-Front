import styled from "styled-components";

export const CtNavbar = styled.div`
  background: linear-gradient(#9fc3e3, #283954);
  border-bottom: solid 2px #283954;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  z-index: 1; */
  /* width: 100vw; */
  margin-top: -1;
  color: white;
  display: flex;
  justify-content: space-around;
`;

export const CtLogo = styled.div`
width: 70vw;
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
    color: red;
    opacity: 50%;
  }
  
  @media screen and (max-width: 1085px) {
    justify-content: center;
  }

  @media screen and (max-width: 490px) {
    justify-content: center;
  }
`;

export const CtMenu = styled.div`
  border: none;
  background-color: transparent;
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
`;

export const BtNavbar = styled.button`
  width: 3.5em;
  height: 2.25em;
  border: none;
  border-radius: 0.5em;
  background-color: #283954;
  color: #bfcce1;
  top: 1.5%;
  right: 3%;
  transition-duration: 0.25s;
  cursor: pointer;
  font-family: "Stick No Bills";
  font-size: 1em;
  &:hover {
    background-color: transparent;
    color: red;
    opacity: 50%;
    font-weight: bolder;
  }
  
  @media screen and (max-width: 1085px) {
    /* display: none; */
  }

  @media screen and (max-width: 490px) {
    display: none;
  }

`;
