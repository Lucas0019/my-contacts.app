import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export const NewContact = () => {
  return (
    <div data-page="NewContact">
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </div>
  );
};
