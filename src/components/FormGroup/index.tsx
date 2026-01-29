import { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  error?: string | null;
  children?: ReactNode;
};

export const FormGroup = ({ error, children }: Props) => {
  return (
    <S.FormGroupContainer data-component="FormGroup">
      {children}
      {error && <small>{error}</small>}
    </S.FormGroupContainer>
  );
};
