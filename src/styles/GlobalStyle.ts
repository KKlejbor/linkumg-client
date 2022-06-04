import { createGlobalStyle } from 'styled-components';

interface Props {
  url: string
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props:Props) => (props.url ? `url(${props.url})` : '')};
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
