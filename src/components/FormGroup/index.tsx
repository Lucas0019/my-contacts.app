import { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  children: ReactNode;
};

export const FormGroup = ({ children }: Props) => {
  return <S.FormGroupContainer>{children}</S.FormGroupContainer>;
};
