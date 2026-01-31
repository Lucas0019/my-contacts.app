import { ChangeEvent, FormEvent } from 'react';

import { formatPhone } from '../utils/formatPhone';
import { normalizePhone } from '../utils/normalizePhone';

import { useContactValidation } from './useContactValidation';
import { useFormFields } from './useFormFields';

export const useContactForm = () => {
  const { fields, setFieldValue } = useFormFields({
    name: '',
    email: '',
    phone: '',
    category: '',
  });

  const { name, email, phone, category } = fields;

  const {
    getFieldError,
    removeFieldError,
    validateEmail,
    validatePhone,
    validateForm,
  } = useContactValidation();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFieldValue('phone', formatted);
    removeFieldError('phone');
  };

  const handlePhoneBlur = () => {
    validatePhone(phone);
  };

  const handleSubmit =
    (onValidSubmit: (data: typeof fields) => void) =>
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!validateForm({ name, email, phone })) return;

      onValidSubmit({ name, email, phone: normalizePhone(phone), category });
    };

  return {
    fields,
    handlers: {
      handleNameChange: (e: ChangeEvent<HTMLInputElement>) => {
        setFieldValue('name', e.target.value);
        removeFieldError('name');
      },
      handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => {
        setFieldValue('email', e.target.value);
        removeFieldError('email');
      },
      handleEmailBlur: () => validateEmail(email),
      handlePhoneChange,
      handlePhoneBlur,
      setCategory: (value: string) => setFieldValue('category', value),
    },
    getFieldError,
    handleSubmit,
  };
};
