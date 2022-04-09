import {
  Header as MantineHeader,
  Group,
  Burger,
  Transition,
  Paper,
  Container,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { ColorSchemeToggle } from 'components/molecules/ColorSchemeToggle';
import { DirectionToggle } from 'components/molecules/DirectionToggle';
import useStyles from './styles';

export function Header() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  return (
    <MantineHeader height={60} className={classes.root}>
      <Container size="xl" className={classes.header}>
        Logo
        <Group spacing={5} className={classes.links}>
          <NextLink href="/" className={classes.link}>
            Main
          </NextLink>
          <NextLink href="/about" className={classes.link}>
            About
          </NextLink>
          <NextLink href="/contacts" className={classes.link}>
            Contacts
          </NextLink>
          <ColorSchemeToggle />
          <DirectionToggle />
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <NextLink href="/" className={classes.link}>
                Main
              </NextLink>
              <NextLink href="/about" className={classes.link}>
                About
              </NextLink>
              <NextLink href="/contacts" className={classes.link}>
                Contacts
              </NextLink>
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
