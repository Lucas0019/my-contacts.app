import { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  error?: string | null;
  children: ReactNode;
};

export const FormGroup = ({ error, children }: Props) => {
  const hasError = Boolean(error);

  return (
    <S.FormGroupContainer data-component="FormGroup" data-error={hasError}>
      {children}
      {hasError && <small>{error}</small>}
    </S.FormGroupContainer>
  );
};
