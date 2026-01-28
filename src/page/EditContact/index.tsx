import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export const EditContact = () => {
  return (
    <main data-page="EditContact">
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </main>
  );
};
