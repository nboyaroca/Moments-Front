import styled from "styled-components";

export const CtDetail = styled.div`
  /* margin-top: 15em; */
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#062249, #4e87be);
  color: #e4f4fb;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding-top: 10%;
    /* height: 100vh; */
  }
`;

export const CtMoment = styled.div`
  /* border: solid 2px red; */
  width: 35%;
  height: 55vh;
  /* margin: 5%; */
  margin-top: 5%;
  max-width: 400px;
  /* gap: 20px; */
  overflow: hidden;

  border-radius: 5%;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(110, 110, 110));
  transition-duration: 0.25s;

  &:hover img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  @media screen and (max-width: 820px) {
    width: 80%;
    min-height: 50vh;
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    min-height: 50vh;
  }
`;

export const ImgPicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5%;

  /* -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004); */

  transform-origin: center;
  /* transform: perspective(800px) rotateY(25deg); */
  transition: 0.5s;
`;

export const CtInfo = styled.div`
  /* border: solid 2px green; */
  width: 35%;
  height: 55vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
    height: 200vh;
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    align-items: center;
    margin-top: none;
    height: 200vh;
  }
`;

export const TxtTitle = styled.h1`
  font-family: "Stick No Bills";
  font-size: 5rem;
`;

export const TxtDescription = styled.h4`
  line-height: 2em;
  line-break: anywhere;
`;

export const CtComments = styled.div`
  /* border: solid 2px yellow; */
  border-left: solid 4px #8b9ab3;
  padding: 1em;
  width: 20%;
  height: 70vh;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    align-items: center;
    margin-top: none;
    border-left: none;
    border-top: solid 4px #8b9ab3;
  }
`;

export const TxtListComments = styled.h3`
  /* font-family: "Roboto"; */
  padding-bottom: 1em;
`;

export const TxtComments = styled.h5`
font-weight: normal;
`;
