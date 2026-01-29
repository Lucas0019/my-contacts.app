import { isEmailValid } from '../utils/isEmailValid';

import { useError } from './useError';

type Field = 'name' | 'email';

export function useContactValidation() {
  const { getFieldError, setFieldError, removeFieldError, resetErrors } =
    useError<Field>();

  const validateName = (value: string) => {
    if (!value) {
      setFieldError({ field: 'name', message: 'Nome é obrigatório' });
      return false;
    }
    return true;
  };

  const validateEmail = (value: string) => {
    if (!value) {
      setFieldError({ field: 'email', message: 'Email é obrigatório' });
      return false;
    }

    if (!isEmailValid(value)) {
      setFieldError({
        field: 'email',
        message: 'O formato do email é inválido, ex: lucas@gmail.com',
      });
      return false;
    }

    return true;
  };

  const validateForm = (values: { name: string; email: string }) => {
    resetErrors();

    const nameIsValid = validateName(values.name);
    const emailIsValid = validateEmail(values.email);

    return nameIsValid && emailIsValid;
  };

  return {
    getFieldError,
    removeFieldError,
    validateEmail,
    validateForm,
  };
}
