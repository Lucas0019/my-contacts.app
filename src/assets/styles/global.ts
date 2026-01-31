import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --backgroundColor: ${({ theme }) => theme.colors.background};
    --primaryColor: ${({ theme }) => theme.colors.gray[100]};
    --secondaryColor: ${({ theme }) => theme.colors.gray[200]};
    --textColor: ${({ theme }) => theme.colors.gray[900]};

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
    color: var(--textColor);
   }

   button {
    cursor: pointer
   }
`;
