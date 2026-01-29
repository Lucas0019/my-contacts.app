import styled from 'styled-components';

export const UIInput = styled.input`
  width: 100%;
  border: 0;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.danger.main};

    &::placeholder {
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`;
