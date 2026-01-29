import styled from 'styled-components';

export const FormGroupContainer = styled.div`
  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 0.75rem;
    margin-top: 8px;
    display: block;
  }
`;
