import styled from "styled-components";

export const CtNewMoment = styled.div`
  background: linear-gradient( #283954, #9fc3e3);
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const CtForm = styled.form`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: aliceblue;
  width: 40%;
  height: 40vh;
  margin: 0 auto 100px auto;
  padding: 20px;
  border: solid 1px #4c5a71;
  border-radius: 1em;

  @media screen and (max-width: 415px) {
    width: 80%;
    font-size: 1.1rem;
  }
`;

export const Label = styled.text`
  font-size: 1rem;
  font-style: italic;
`;

export const CtInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-family: "Lato", sans-serif;
  font-size: 1em;
  width: 27rem;
  height: 2rem;
  padding: 0px 15px 0px 15px;

  background: #7881a1;
  outline: none;
  border-radius: 0.5em;
  /* color: #7881a1; */
  /* color: #394368; */
  color: #dbdce2;

  border: solid 1px #7881a1;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  &:hover {
    background: #dbdce2;
    color: #394368;
  }

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder, ::placeholder {
    font-size: 0.875em;
    color: #dbdce2;
  }

  @media screen and (max-width: 1050px) {
    width: 17rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 415px) {
    width: 17rem;
    font-size: 0.9rem;
  }
`;

export const CtButtons = styled.div`
display: flex;
justify-content: space-evenly;
column-gap: 40px
`;

export const BtSubmit = styled.button`
  width: 5em;
  height: 2.25em;
  border: none;
  border-radius: 10%;
  background-color: #7881a1;
  color: #bfcce1;
  text-align: center;
  top: 1.5%;
  right: 3%;
  transition-duration: 0.25s;
  cursor: pointer;
  font-family: "Stick No Bills";
  font-size: 1rem;
  
  &:hover {
    background-color: #a6afcd;
    color: #7881a1;
  }
  display: inline-block;

  &:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
}
}
`;

