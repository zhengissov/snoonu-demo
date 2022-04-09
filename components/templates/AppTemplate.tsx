import { PropsWithChildren } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from 'components/organisms/Header';

type Props = PropsWithChildren<unknown>;

export function AppTemplate(props: Props) {
  const { children } = props;
  return (
    <AppShell
      padding="md"
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
