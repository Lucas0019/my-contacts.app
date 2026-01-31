import { isEmailValid } from '../utils/isEmailValid';
import { isPhoneValid } from '../utils/isPhoneValid';

import { useError } from './useError';

type Field = 'name' | 'email' | 'phone';

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
        message: 'Formato de email inválido',
      });
      return false;
    }

    return true;
  };

  const validatePhone = (value: string) => {
    if (!value) return true; // opcional

    if (!isPhoneValid(value)) {
      setFieldError({
        field: 'phone',
        message: 'Telefone inválido',
      });
      return false;
    }

    return true;
  };

  const validateForm = (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    resetErrors();

    const nameIsValid = validateName(values.name);
    const emailIsValid = validateEmail(values.email);
    const phoneIsValid = validatePhone(values.phone);

    return nameIsValid && emailIsValid && phoneIsValid;
  };

  return {
    getFieldError,
    removeFieldError,
    validateEmail,
    validatePhone,
    validateForm,
  };
}
