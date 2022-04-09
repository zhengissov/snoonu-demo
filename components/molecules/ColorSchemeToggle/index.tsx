import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import useStyles from './styles';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const onToggle = () => {
    toggleColorScheme();
  };

  return (
    <ActionIcon onClick={onToggle} size="lg" className={classes.root}>
      {colorScheme === 'dark' ? (
        <Sun width={20} height={20} />
      ) : (
        <MoonStars width={20} height={20} />
      )}
    </ActionIcon>
  );
}
