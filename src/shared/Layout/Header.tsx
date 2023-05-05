import React from 'react';
import { Flex, Text } from '@mantine/core';

interface HeaderProps {
  title: React.ReactNode;
  action?: React.ReactNode;
}
const Header = (props: HeaderProps) => {
  const { title, action } = props;
  return (
    <Flex py="0.7rem" justify="space-between" align="center">
      <Text size="lg" fw={700}>
        {title}
      </Text>
      {action}
    </Flex>
  );
};

export default Header;
