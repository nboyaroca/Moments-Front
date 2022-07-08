import styled from "styled-components";


export const CtNavbar = styled.div`
  display: none;
  @media screen and (max-width: 490px) {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0 !important;
  height: 5rem;
  position: fixed;
  z-index: 1;
  width: 100vw;
  background: linear-gradient(#283954, #9fc3e3);
  color: #bfcce1;
}
`;

export const CtButtons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2em;
  justify-content: space-evenly;
  align-items: center;
  border: none;
`;

export const CtUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TxtUser = styled.h5`
  display: flex;
  justify-content: center;
  color: #bfcce1;
`;

export const BtNavbar = styled.button`
  width: 2.25em;
  height: 2.25em;
  border: none;
  border-radius: 0.5em;
  background-color: #283954;
  color: #bfcce1;
  /* top: 1.5%;
  right: 3%; */
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
`;

export const BtMain = styled.button`
  width: 2.25em;
  height: 2.25em;
  border: none;
  border-radius: 0.5em;
  background-color: #283954;
  color: #bfcce1;
  transition-duration: 0.25s;
  cursor: pointer;
  font-family: "Stick No Bills";
  font-size: 1.7em;
  &:hover {
    font-size:2em;
    font-weight: bolder;
    background-color: transparent;
    color: red;
    opacity: 50%;
  }
  `