import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import * as S from './styles';

export const ContactsList = () => {
  return (
    <S.ContactsListContainer data-component="ContactsList">
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </S.InputSearchContainer>
      <S.ContactsListHeader>
        <strong>3 contatos</strong>

        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/1">
              <img src={edit} alt="Ícone de editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </S.ContactsCard>
      </S.ListContainer>
    </S.ContactsListContainer>
  );
};
