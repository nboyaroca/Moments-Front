import styled from "styled-components";

export const CtForm = styled.div`
  position: relative;
  width: 80%;
  margin: 50px auto 100px auto;
  border: solid 2px red;
`;

export const CtInput = styled.input`
font-family: 'Lato', sans-serif;
  font-size: 1em;
  width: 50%;
  height: 20px;
  padding: 0px 15px 0px 15px;
  
  background: #e2dedb;
  outline: none;
  color: #726659;
  
  border: solid 1px #b3aca7;
  border-bottom: none;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  &:hover {
  background: #b3aca7;
  color: #e2dedb;
  }

  &:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  color: #bbb5af;
}
`