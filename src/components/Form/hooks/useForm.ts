import { useCallback, useEffect, useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  useEffect(() => {
    const dataFromStorage = localStorage.getItem('formData');
    if (dataFromStorage) {
      if (dataFromStorage) setFormData(JSON.parse(dataFromStorage) as T);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = useCallback((name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const register = useCallback(
    (name: keyof T) => {
      const value = formData[name];
      return { handleChange, value, name };
    },
    [handleChange, formData],
  );

  const handleClear = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  return { formData, register, clear: handleClear };
};

export default useForm;
