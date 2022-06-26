import styled from "styled-components";

export const CtDetail = styled.div`
  /* margin-top: 15em; */
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 200vh;
  background-color: #062249;
  color: #e4f4fb;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    height: 150vh;
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    height: 150vh;
  }
`;

export const CtMoment = styled.div`
  /* border: solid 2px red; */
  width: 45%;
  height: 66vh;
  margin: 5%;
  max-width: 400px;
  gap: 20px;
  /* float: left;
  -webkit-transition: margin 0.5s ease-out;
  -moz-transition: margin 0.5s ease-out;
  -o-transition: margin 0.5s ease-out; */

  /* & img:hover {
    transform: perspective(800px) rotateY(0deg);
    opacity: 1;
  } */
  border-radius: 5%;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(110, 110, 110));
  transition-duration: 0.25s;

  &:hover img {
    margin-top: 50px;
  }

  @media screen and (max-width: 820px) {
    width: 80%;
    margin-top: 2px;
    &:hover img {
      margin-top: none;
    }
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    &:hover img {
      margin-top: none;
    }
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
  width: 45%;
  height: 58vh;
  margin: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
    height: 100vh;
    
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    align-items: center;
    
  }
`;

export const TxtTitle = styled.h3`
  font-size: 1.7em;
`;

export const TxtDescription = styled.h5`
  line-height: 2em;
`;
