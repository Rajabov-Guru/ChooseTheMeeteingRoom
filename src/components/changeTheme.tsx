import React, { ComponentType, useCallback } from 'react';
import { useMantineColorScheme } from '@mantine/core';

function changeTheme<P extends object>(Trigger: ComponentType<P>) {
  const ChangeThemeWidget = (props: P) => {
    const { toggleColorScheme } = useMantineColorScheme();

    const handleChange = () => {
      toggleColorScheme();
    };

    return <Trigger onClick={handleChange} {...props} />;
  };

  return ChangeThemeWidget;
}

export default changeTheme;
