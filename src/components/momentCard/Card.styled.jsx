import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: #4c5a71;
`;

export const CtCard = styled.div`
  /* border: 2px solid blue; */
  width: 240px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  justify-content: space-between;
  padding: 10px;
  border-radius: 2.5%;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(110, 110, 110));
  transition-duration: 0.25s;
  background-color: #bfcce1;
  &:hover {
    box-shadow: 0 0 25px rgb(225, 236, 249);
  }

  @media screen and (max-width: 820px) {
    /* width: 200px;
    height: 300px; */
  }

  @media screen and (max-width: 415px) {
    width: 300px;
    height: 490px;
    font-size: 1.4rem;
  }
`;

export const CtImage = styled.div`
  /* border: 5px solid red; */
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 75%;
  border-radius: 1.75% 1.75% 0 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  overflow: hidden;
  &:hover {
    width: 102%;
    transition: all 0.2s ease-in-out;
  }
`;

export const Picture = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const BtFav = styled.button`
  position: absolute;
  top: 0.75em;
  left: 0.75em;
  /* bottom: 4rem;
  left: 1rem; */
  background-color: transparent;
  /* color: #f6f6e0; #3d4156*/
  color: #bfcce1;
  opacity: initial;
  /* width: 1em;
  height: 1em; */
  font-size: 1.5rem; //canvia la mida de l'icon
  border: none;
  border-radius: 25%;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  opacity: 50%;
  transition: opacity 0.5s;
  cursor: pointer;

  &:hover {
    color: red;
    opacity: 50%;
    /* color: #b9f2ff;
    opacity: 100%; */
    /* transition: opacity 0.5s; */
  }
  
  @media screen and (max-width: 820px) {
    /* margin-right: 5.5em; */
    /* font-size: 1.25rem;
    bottom: 4.5rem; */
  }

  @media screen and (max-width: 415px) {
    /* margin-right: 5.5em; */
    /* font-size: 1.5rem;
    bottom: 7rem; */
  }

  /* width: ${(props) => (props.fullWidth ? "100%" : "500px")}; */
`;

export const CtInfo = styled.div`
  /* border: 1px solid green; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  z-index: -1;
  font-size: 80%;
  width: 100%;
  color: #474c64;
  /* padding-left: 0.8em; */
  /* text-shadow: 0.1em 0.1em 0.1em #999; */
`;

export const CtText = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: flex-end;
`;

export const TxtUser = styled.h5`
  display: flex;
  justify-content: center;
  color: #bfcce1;
`;

export const TxtTitle = styled.h1`
  font-family: "Stick No Bills";
  color: #3d4156;
  display: flex;
  justify-content: left;
  line-break: anywhere;
`;

export const TxtDescription = styled.p`
  text-align: end;
  line-break: anywhere;
`;

export const CtButtons = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: row;
  /* grid-row-gap: 0.5em; */
  justify-content: start;
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
  position: relative;
  z-index: 1;
  background-color: #55657e;
  /* background-color: #7e91ae; */
  width: 100%;
  height: 47px;
  border-radius: 0 0 7px 7px;
  clip-path: polygon(0% 0%, 100% 33%, 100% 100%, 0% 100%);

  @media screen and (max-width: 820px) {
    height: 50px;
  }

  @media screen and (max-width: 415px) {
    height: 60px;
  }

`;

export const BtButton = styled.button`
  background-color: transparent;
  color: #bfcce1;
  /* color: #4c5a71; */
  /* width: 2em;
  height: 2em; */
  font-size: 1rem;
  border: none;
  /* border-radius: 50%; */
  justify-self: center;
  transition: all 0.1s ease-in-out;
  /* overflow: hidden; */
  text-decoration: none !important;
  cursor: pointer;
  &:hover {
    color: red !important;
    opacity: 50%;
    /* color: #bfcce1 !important; */
  }
  /* width: ${(props) => (props.fullWidth ? "100%" : "500px")}; #32383f*/

  @media screen and (max-width: 415px) {
    grid-row-gap: none;
    font-size: 1.2rem;
  }
`;

export const CtUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-right: 2rem;
padding-bottom: none;
`;
