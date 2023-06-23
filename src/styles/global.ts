import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0; //Remove the focus when clicked in a element
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-300']};
    }

    body{
        background-color: ${(props) => props.theme['white-200']};
        -webkit-font-smoothing: antialiased;//This makes it "shap". More detailed the text. More beautiful
    }

    body, input, button, text-area{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1;
    }
`
