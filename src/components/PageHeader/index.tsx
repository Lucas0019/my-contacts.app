import { useNavigate } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import * as S from './styles';

type Props = {
  title: string;
};

export const PageHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <S.PageHeaderContainer data-component="PageHeader">
      <button type="button" onClick={() => navigate(-1)}>
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </button>

      <h1>{title}</h1>
    </S.PageHeaderContainer>
  );
};
