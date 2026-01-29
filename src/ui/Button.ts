import styled from 'styled-components';

type ButtonProps = {
  buttonType?: 'default' | 'danger';
};

export const UIButton = styled.button<ButtonProps>`
  height: 52px;
  padding: 16px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  color: #fff;
  transition: background 0.2s ease-in;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  appearance: none;

  background: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }

  &[data-variant='danger'] {
    background: ${({ theme }) => theme.colors.danger.main};

    &:hover {
      background: ${({ theme }) => theme.colors.danger.light};
    }

    &:active {
      background: ${({ theme }) => theme.colors.danger.dark};
    }
  }
`;
