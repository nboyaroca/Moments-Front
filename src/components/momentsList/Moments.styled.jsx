import styled from "styled-components";
import img from "../../assets/img/Background.jpg";

export const CtMoments = styled.div`

  padding: 2em 0 2em 0;
  background-color: #8b9ab3;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-row-gap: 2em;
  justify-content: space-evenly;
  /* position: relative; */
  /* justify-items: center; */

  background-image: url(${img});
  &::content{
    opacity: 0.5;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 45% 45%;
    justify-items: center;
    background-image: none;
  }

  @media screen and (max-width: 415px) {
    grid-template-columns: 90%;
    justify-items: center;
    background-image: none;
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
  /* position: absolute; */
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
