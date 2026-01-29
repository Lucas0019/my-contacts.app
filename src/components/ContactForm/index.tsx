import { useContactForm } from '../../hooks/useContactForm';
import { UIButton } from '../../ui/Button';
import { UIInput } from '../../ui/Input';
import { UISelect } from '../../ui/Select';
import { FormGroup } from '../FormGroup';

import * as S from './styles';

type Props = {
  buttonLabel: string;
};

export const ContactForm = ({ buttonLabel }: Props) => {
  const { fields, handlers, getFieldError, handleSubmit } = useContactForm();

  const nameError = getFieldError('name');
  const emailError = getFieldError('email');

  const isFormValid =
    fields.name.trim().length > 0 &&
    fields.email.trim().length > 0 &&
    fields.phone.trim().length > 0 &&
    fields.category.trim().length > 0 &&
    !getFieldError('name') &&
    !getFieldError('email') &&
    !getFieldError('phone');

  return (
    <S.ContactFormContainer data-component="ContactForm">
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormGroup error={nameError?.message}>
          <UIInput
            placeholder="Nome*"
            value={fields.name}
            onChange={handlers.handleNameChange}
            data-error={!!nameError}
          />
        </FormGroup>

        <FormGroup error={emailError?.message}>
          <UIInput
            type="email"
            placeholder="Email*"
            value={fields.email}
            onChange={handlers.handleEmailChange}
            onBlur={handlers.handleEmailBlur}
            data-error={!!emailError}
          />
        </FormGroup>

        <FormGroup error={getFieldError('phone')?.message}>
          <UIInput
            placeholder="Telefone"
            value={fields.phone}
            onChange={handlers.handlePhoneChange}
            onBlur={handlers.handlePhoneBlur}
            data-error={!!getFieldError('phone')}
          />
        </FormGroup>

        <FormGroup>
          <UISelect
            value={fields.category}
            onChange={(e) => handlers.setCategory(e.target.value)}
          >
            <option value="">Selecione a categoria</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="discord">Discord</option>
          </UISelect>
        </FormGroup>

        <UIButton
          type="submit"
          data-action="submit-contact-form"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </UIButton>
      </form>
    </S.ContactFormContainer>
  );
};
