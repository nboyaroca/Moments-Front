import styled from "styled-components";

export const CtDetail = styled.div`
  /* margin-top: 15em; */
  display: flex;
  justify-content: space-evenly;
  /* column-gap: 5%; */
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#283954, #9fc3e3);
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
  width: 30vw;
  /* height: 55vh; */
  /* margin: 5%; */
  margin-top: 5%;
  max-width: 400px;
  /* gap: 20px; */
  overflow: hidden;

  filter: drop-shadow(0.5em 0.5em 0.5em #bfcce1);
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
    height: 55vh;
    /* min-height: 50vh; */
  }
`;

export const ImgPicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1em;

  /* -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004); */

  transform-origin: center;
  /* transform: perspective(800px) rotateY(25deg); */
  transition: 0.5s;
`;

export const CtInfo = styled.div`
  /* border: solid 2px green; */
  width: 25vw;
  height: 55vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
    /* height: 200vh; */
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    align-items: center;
    margin-top: none;
    /* height: 200vh; */
  }
`;

export const TxtTitle = styled.h1`
  font-family: "Stick No Bills";
  font-size: 2.5rem;
`;

export const TxtDescription = styled.h4`
font-size: 1.5rem;
  line-height: 2em;
  text-align: justify;
`;

export const TxtDetail = styled.h5`
  line-height: 2em;
  font-weight: normal;
  line-break: anywhere;
`;

export const CtComments = styled.div`
  /* border: solid 2px yellow; */
  border-left: solid 4px #778ea2;
  padding: 1em;
  width: 20vw;
  height: 70vh;
  margin-top:5%;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
  }

  @media screen and (max-width: 415px) {
    width: 80%; 
    align-items: center;
    margin-top: none;
    border-left: none;
    border-top: solid 4px #778ea2;
  }
`;

export const TxtListComments = styled.h3`
  /* font-family: "Roboto"; */
  padding-bottom: 1em;
`;

export const TxtComments = styled.h5`
  font-weight: normal;
  padding-bottom: 5rem;
`;
