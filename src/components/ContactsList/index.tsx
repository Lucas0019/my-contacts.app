import { useState } from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { useContacts } from '../../hooks/useContacts';
import { Loader } from '../Loader';

import * as S from './styles';

export const ContactsList = () => {
  const {
    contacts,
    handleToggleOrderBy,
    orderBy,
    handleSearch,
    searchTerm,
    loading,
    error,
    hasContacts,
  } = useContacts();

  const [isOrdering, setIsOrdering] = useState(false);
  const isSearching = searchTerm.length > 0;

  const handleOrder = () => {
    setIsOrdering(true);

    setTimeout(() => {
      handleToggleOrderBy();
      setIsOrdering(false);
    }, 300);
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <S.ContactsListContainer data-component="ContactsList">
        <p>Ocorreu um erro ao carregar os contatos.</p>
      </S.ContactsListContainer>
    );
  }

  return (
    <S.ContactsListContainer data-component="ContactsList">
      {loading || (isOrdering && <Loader />)}
      <S.InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </S.InputSearchContainer>

      <S.ContactsListHeader>
        <strong>
          {contacts.length} {contacts.length === 1 ? 'Contato' : 'Contatos'}
        </strong>

        <Link to="/new">Novo Contato</Link>
      </S.ContactsListHeader>

      {hasContacts && (
        <S.ListHeader>
          <button type="button" onClick={handleOrder}>
            <span>Nome</span>
            <img
              src={arrow}
              alt="Ícone de seta para ordenar"
              data-order-by={orderBy}
            />
          </button>
        </S.ListHeader>
      )}

      {!hasContacts && isSearching && (
        <S.EmptyState>
          <p>
            Nenhum contato encontrado para <strong>“{searchTerm}”</strong>.
          </p>
        </S.EmptyState>
      )}

      {!hasContacts && !isSearching && (
        <S.EmptyState>
          <p>Você ainda não tem nenhum contato cadastrado.</p>
        </S.EmptyState>
      )}

      {contacts.map((contact) => (
        <S.ContactsCard key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Ícone de editar" />
            </Link>

            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </S.ContactsCard>
      ))}
    </S.ContactsListContainer>
  );
};
