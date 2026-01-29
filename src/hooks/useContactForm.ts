import { ChangeEvent, FormEvent, useState } from 'react';

import { isEmailValid } from '../utils/isEmailValid';

type Field = 'name' | 'email';

type FieldError = {
  field: Field;
  message: string;
};

export const useContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<FieldError[]>([]);

  const getFieldError = (field: Field) =>
    errors.find((error) => error.field === field);

  const removeFieldError = (field: Field) =>
    setErrors((prev) => prev.filter((error) => error.field !== field));

  const validateName = (value: string): FieldError | null => {
    if (!value) {
      return { field: 'name', message: 'Nome é obrigatório' };
    }
    return null;
  };

  const validateEmail = (value: string): FieldError | null => {
    if (!value) {
      return { field: 'email', message: 'Email é obrigatório' };
    }

    if (!isEmailValid(value)) {
      return {
        field: 'email',
        message: 'O formato do email é inválido, ex: lucas@gmail.com',
      };
    }

    return null;
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    removeFieldError('name');
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    removeFieldError('email');
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setErrors((prev) => {
      const filtered = prev.filter((e) => e.field !== 'email');
      return error ? [...filtered, error] : filtered;
    });
  };

  const validateForm = () => {
    const newErrors: FieldError[] = [];

    const nameError = validateName(name);
    if (nameError) newErrors.push(nameError);

    const emailError = validateEmail(email);
    if (emailError) newErrors.push(emailError);

    setErrors(newErrors);

    return newErrors.length === 0;
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

      if (!validateForm()) return;

      onValidSubmit({
        name,
        email,
        phone,
        category,
      });
    };

  return {
    fields: {
      name,
      email,
      phone,
      category,
    },
    handlers: {
      handleNameChange,
      handleEmailChange,
      handleEmailBlur,
      setPhone,
      setCategory,
    },
    getFieldError,
    handleSubmit,
  };
};
