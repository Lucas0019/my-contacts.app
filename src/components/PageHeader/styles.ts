import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  margin-bottom: 24px;

  button {
    background: none;
    border: none;
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
