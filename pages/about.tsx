import type { NextPage } from 'next';
import { AppTemplate } from 'components/templates/AppTemplate';
import { Container } from '@mantine/core';

const About: NextPage = () => (
  <AppTemplate>
    <Container size="xl">About Page</Container>
  </AppTemplate>
);

export default About;
