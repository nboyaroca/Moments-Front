import styled from "styled-components";

export const CtCard = styled.div`
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

export const CtImage = styled.div`
  /* border: 5px solid red; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  border-radius: 5% 5% 0 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  overflow-x: hidden;
`;

export const Picture = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CtInfo = styled.div`
  /* border: 5px solid green; */
  display: flex;
  justify-content: space-around;
  /* clip-path: polygon(0% 0%, 100% 110%, 100% 100%, 0% 100%); */
  font-size: 80%;
  width: 100%;
  /* height: 20%; */
  color: rgb(30, 30, 30);
  /* padding-left: 0.8em; */
  text-shadow: 0.1em 0.1em 0.1em #999;
`;

export const CtText = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const TxtUser = styled.h5`
  display: flex;
  justify-content: left;
`;

export const TxtTitle = styled.h3`
  display: flex;
  justify-content: left;
`;

export const TxtDescription = styled.p``;

export const CtButtons = styled.div`
  /* border: 2px solid yellow; */
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 1em;
  grid-row-gap: 0.5em;
  justify-content: center;
  justify-items: center;
`;

export const BtButton = styled.button`
  background-color: transparent;
  color: #4c5a71;
  width: 1.5em;
  height: 1.5em;
  border: none;
  border-radius: 50%;
  justify-self: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: rgb(225, 236, 249);
    color: #32383f;
  }
`;
