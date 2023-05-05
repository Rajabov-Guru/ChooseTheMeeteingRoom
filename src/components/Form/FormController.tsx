import React from 'react';

interface FormControllerProps {
  name: string;
  handleChange: (name: string, value: any) => void;
  render: (setValue: (value: any) => void) => React.ReactNode;
}
const FormController = ({ name, handleChange, render }: FormControllerProps) => {
  const setChangedValue = (value: any) => {
    handleChange(name, value);
  };

  return <>{render(setChangedValue)}</>;
};

export default FormController;
