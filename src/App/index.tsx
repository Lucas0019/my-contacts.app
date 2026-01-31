/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '../AppRoutes';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/theme/default';
import { Header } from '../components/Header';

import * as S from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <S.AppContainer>
          <Header />
          <AppRoutes />
        </S.AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
