import { useCallback, useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = useCallback((name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (action: (data: T) => void) => {
    action(formData);
  };

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
