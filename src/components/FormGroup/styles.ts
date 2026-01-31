import styled from 'styled-components';

export const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 0.75rem;
    margin-top: 8px;
  }

  &[data-error='true'] {
    small {
      opacity: 1;
    }
  }
`;
