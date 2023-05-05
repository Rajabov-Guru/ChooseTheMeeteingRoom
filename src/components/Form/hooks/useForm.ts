import { useCallback, useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = useCallback((name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const register = useCallback(
    (name: keyof T) => {
      return { name, handleChange };
    },
    [handleChange],
  );

  const handleClear = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  return { formData, register, clear: handleClear };
};

export default useForm;
