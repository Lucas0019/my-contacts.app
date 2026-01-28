import { UIButton } from '../../ui/Button';
import { UIInput } from '../../ui/Input';
import { UISelect } from '../../ui/Select';
import { FormGroup } from '../FormGroup';

import * as S from './styles';

type Props = {
  buttonLabel: string;
};

export const ContactForm = ({ buttonLabel }: Props) => {
  return (
    <S.ContactFormContainer data-component="ContactForm">
      <form>
        <FormGroup>
          <UIInput placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <UIInput placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <UIInput placeholder="Telefone" />
        </FormGroup>

        <FormGroup>
          <UISelect>
            <option value="instagram">Instagram</option>
            <option value="linkedin">Linkedin</option>
          </UISelect>
        </FormGroup>

        <UIButton type="submit" data-action>
          {buttonLabel}
        </UIButton>
      </form>
    </S.ContactFormContainer>
  );
};
