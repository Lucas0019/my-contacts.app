import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import * as S from './styles';

export const ContactsList = () => {
  return (
    <S.ContactsListContainer>
      <S.ContactsListHeader>
        <strong>3 contatos</strong>

        <a href="/">Novo Contato</a>
      </S.ContactsListHeader>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ícone de seta para ordenar" />
          </button>
        </header>

        <S.ContactsCard>
          <div className="info">
            <div className="contact-name">
              <strong>Lucas Xavier</strong>
              <small>Instagram</small>
            </div>
            <span>lucas@email.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Ícone de editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </S.ContactsCard>
      </S.ListContainer>
    </S.ContactsListContainer>
  );
};
