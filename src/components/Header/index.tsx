import logo from '../../assets/images/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer data-component="Header">
      <img src={logo} alt="Logo" width={200} />
    </S.HeaderContainer>
  );
};
