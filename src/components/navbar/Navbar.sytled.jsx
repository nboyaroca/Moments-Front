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
overflow: hidden;
`;

export const Logo = styled.img`
  height: 60px;
  display: flex;
  justify-content: left;
  filter: ${(props) => props.filter};
  fill: #bfcce1;
  stroke-width:.5;
  fill-opacity:0;
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
  &:hover {
    background-color: #a6afcd;
    color: #7881a1;
  }
`;
