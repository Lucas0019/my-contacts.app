import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --backgroundColor: ${({ theme }) => theme.colors.background};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Sora', sans-serif
   }

   body {
    background: var(--backgroundColor);
    font-size: 16px;
   }

   button {
    cursor: pointer
   }
`;
