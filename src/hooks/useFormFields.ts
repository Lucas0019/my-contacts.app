import { useState } from 'react';

type FormFields<T> = {
  [K in keyof T]: T[K];
};

export function useFormFields<T extends Record<string, any>>(initialValues: T) {
  const [fields, setFields] = useState<FormFields<T>>(initialValues);

  const setFieldValue = <K extends keyof T>(field: K, value: T[K]) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  return {
    fields,
    setFieldValue,
  };
}
