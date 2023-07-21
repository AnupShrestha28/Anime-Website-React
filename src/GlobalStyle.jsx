import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
        margin:0 ;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
    }

    body{
        color: #6c7983;
        font-size: 1.2rem;

        &::-webkit-scrollbar{
            width: 7px;
        }
        &::webkit-scrollbar-thumb{
            background-color: #27AE60;
            border-radius: 10px;
        }

        &::webkit-scrollbar-track{
            background-color: #ededed;
        }
    }
`;

export default GlobalStyle;
