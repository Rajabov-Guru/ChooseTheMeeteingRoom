import { Input } from '@mantine/core';
import React from 'react';

interface FormControllerProps {
  name: string;
  value: any;
  handleChange: (name: string, value: any) => void;
  render: (value: any, setValue: (value: any) => void) => React.ReactNode;
}
const FormController = ({ name, value, handleChange, render }: FormControllerProps) => {
  const setChangedValue = (val: any) => {
    handleChange(name, val);
  };

  return <Input.Wrapper w="100%">{render(value, setChangedValue)}</Input.Wrapper>;
};

export default FormController;
