import logo from '../../assets/images/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Logo" width={200} />

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </S.InputSearchContainer>
    </S.HeaderContainer>
  );
};
