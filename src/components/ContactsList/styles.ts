import styled from 'styled-components';

export const ContactsListContainer = styled.div`
  margin-top: 2rem;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    filter: drop-shadow(0, 4, 10 rgba(0, 0, 0, 0.04));
    outline: none;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const ContactsListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  strong {
    color: #222;
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.lighter};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 1.5rem;

  Header {
    margin-bottom: 0.5rem;
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
      gap: 8px;

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }

      img {
        transform: rotate(0deg);
        transition: transform 0.2s ease-in;
        width: 10px;
      }
    }
  }
`;

export const ContactsCard = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: var(--secondaryColor);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    a {
      display: flex;
      align-items: center;
      padding: 4px;
    }
  }
`;
