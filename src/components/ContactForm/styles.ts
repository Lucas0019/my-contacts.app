import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    button[data-action] {
      margin-top: 8px;
      width: 100%;
    }
  }
`;
