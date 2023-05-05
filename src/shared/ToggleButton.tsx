import React, { Children, PropsWithChildren, useState } from 'react';
import { ActionIcon } from '@mantine/core';

interface ToggleButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { children, onClick } = props;
  const [toggled, setToggled] = useState<boolean>(false);
  const [firstState, secondState] = Children.toArray(children);

  const handleToggle = () => {
    if (onClick) {
      onClick();
    }
    setToggled((prev) => !prev);
  };

  return (
    <ActionIcon size="xl" variant="light" color="blue" onClick={() => handleToggle()}>
      {!toggled && firstState}
      {toggled && secondState}
    </ActionIcon>
  );
};

export default ToggleButton;
