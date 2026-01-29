import { useCallback, useState } from 'react';

type FieldError<TField extends string> = {
  field: TField;
  message: string;
};

export function useError<TField extends string>() {
  const [errors, setErrors] = useState<FieldError<TField>[]>([]);

  const getFieldError = useCallback(
    (field: TField) => errors.find((error) => error.field === field),
    [errors],
  );

  const setFieldError = useCallback((error: FieldError<TField>) => {
    setErrors((prev) => {
      const filtered = prev.filter((e) => e.field !== error.field);
      return [...filtered, error];
    });
  }, []);

  const removeFieldError = useCallback((field: TField) => {
    setErrors((prev) => prev.filter((error) => error.field !== field));
  }, []);

  const resetErrors = useCallback(() => {
    setErrors([]);
  }, []);

  return {
    errors,
    setErrors,
    getFieldError,
    setFieldError,
    removeFieldError,
    resetErrors,
  };
}
