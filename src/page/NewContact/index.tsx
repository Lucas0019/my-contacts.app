import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export const NewContact = () => {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
};
