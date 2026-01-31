import { createPortal } from 'react-dom';

import { UIButton } from '../../ui/Button';

import * as S from './styles';

type ModalProps = {
  modalType?: 'default' | 'danger';
};

export const Modal = ({ modalType = 'default' }: ModalProps) => {
  const container = document.getElementById('modal-root');

  if (!container) return null;

  return createPortal(
    <S.ModalOverlay data-component="Modal">
      <S.ModalContainer data-variant={modalType}>
        <h1>Modal</h1>
        <p>
          Elit nulla nulla nostrud aute adipisicing quis quis officia mollit
          consectetur esse sunt incididunt.
        </p>

        <S.ModalFooter>
          <button type="button" data-action="cancel-button">
            Cancelar
          </button>

          <UIButton type="submit" data-variant={modalType}>
            Confirmar
          </UIButton>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>,
    container,
  );
};
