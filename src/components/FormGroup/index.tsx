import { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  children: ReactNode;
};

export const FormGroup = ({ children }: Props) => {
  return (
    <S.FormGroupContainer data-component="FormGroup">
      {children}
    </S.FormGroupContainer>
  );
};
