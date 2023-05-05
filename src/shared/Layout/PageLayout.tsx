import React, { Children, PropsWithChildren } from 'react';
import { Container, Flex } from '@mantine/core';

const PageLayout = ({ children }: PropsWithChildren) => {
  const [header, body] = Children.toArray(children);

  return (
    <Container mx="auto" size="xl" h="100%">
      <Flex direction="column" h="100%">
        {header}
        <Flex sx={{ flex: '1 1 auto' }}>{body}</Flex>
      </Flex>
    </Container>
  );
};

export default PageLayout;
