import { createPortal } from 'react-dom';

import * as S from './styles';

export const Loader = () => {
  const container = document.getElementById('loader-root');

  if (!container) return null;

  return createPortal(
    <S.LoaderContainer>
      <div className="loader" />
    </S.LoaderContainer>,
    container,
  );
};
