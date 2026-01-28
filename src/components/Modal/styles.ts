import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  background: #0006;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  max-width: 450px;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  &[data-variant='danger'] h1 {
    color: ${({ theme }) => theme.colors.danger.main};
  }
  p {
    margin-top: 8px;
  }
`;

export const ModalFooter = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  button {
    &[data-action='cancel-button'] {
      background: transparent;
      border: none;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
