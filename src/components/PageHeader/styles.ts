import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
