import { ChangeEvent, FormEvent } from 'react';

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

  const { getFieldError, removeFieldError, validateEmail, validateForm } =
    useContactValidation();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue('name', e.target.value);
    removeFieldError('name');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue('email', e.target.value);
    removeFieldError('email');
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handleSubmit =
    (
      onValidSubmit: (data: {
        name: string;
        email: string;
        phone: string;
        category: string;
      }) => void,
    ) =>
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!validateForm({ name, email })) return;

      onValidSubmit({ name, email, phone, category });
    };

  return {
    fields,
    handlers: {
      handleNameChange,
      handleEmailChange,
      handleEmailBlur,
      setPhone: (value: string) => setFieldValue('phone', value),
      setCategory: (value: string) => setFieldValue('category', value),
    },
    getFieldError,
    handleSubmit,
  };
};
