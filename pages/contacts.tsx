import type { NextPage } from 'next';
import { AppTemplate } from 'components/templates/AppTemplate';
import { Container } from '@mantine/core';

const Contacts: NextPage = () => (
  <AppTemplate>
    <Container size="xl">Contacts Page</Container>
  </AppTemplate>
);

export default Contacts;
