import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';

import * as S from './styles';

type Props = {
  title: string;
};

export const PageHeader = ({ title }: Props) => {
  return (
    <S.PageHeaderContainer data-component="PageHeader">
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </S.PageHeaderContainer>
  );
};
