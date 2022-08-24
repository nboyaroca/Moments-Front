import styled from "styled-components";

export const FormSearch = styled.form`
margin: 0;
padding: 20px;
/* padding: 20px 0 0 20px; */
background-color: #283954;
width: 100%;
display: flex;
justify-content: flex-start;
column-gap: 1rem;
align-items: center;
/* margin-right: 10%; */
position: relative;
@media screen and (max-width: 490px) {
  display: none;
}
`;

export const InputSearch = styled.input`
max-width: 90%;
height: 5vh;
min-width: 10rem;
padding: 0 5% 0 5%;
border: none;
border-radius: 0.5rem;
outline: none;
font-size: 1em;
color: #7881a1;
background-color: #bfcce1;
--webkit-backdrop-filter: blur( 0.7rem);
/* position: relative; */

@media screen and (max-width: 820px) {
    
  }

  @media screen and (max-width: 490px) {
    
  }

`;

export const BtSearch = styled.button`
background: none;
border: none;
color: #bfcce1;
font-size: 1.2em;
/* position: absolute; */

cursor: pointer;
&:hover {
    /* font-size: 1em; */
    transition: all 0.2s ease-in-out;
    color: red;
    opacity: 50%;
}
`;