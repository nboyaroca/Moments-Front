import styled from "styled-components";

export const FormSearch = styled.form`
width: 80%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: 10%;
position: relative;
`;

export const InputSearch = styled.input`
width: 90%;
height: 5vh;
min-width: 10rem;
padding: 0 5% 0 5%;
border: none;
border-radius: 1.5rem;
outline: none;
font-size: 1em;
color: #7881a1;
background-color: #bfcce1;
--webkit-backdrop-filter: blur( 0.7rem);
/* position: relative; */

@media screen and (max-width: 1085px) {
    
  }

  @media screen and (max-width: 490px) {
    
  }

`;

export const BtSearch = styled.button`
background: none;
border: none;
color: #bfcce1;
/* position: absolute; */

cursor: pointer;
&:hover {
    /* font-size: 1em; */
    transition: all 0.2s ease-in-out;
    color: #b9f2ff;
}
`;