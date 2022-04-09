import { ActionIcon } from '@mantine/core';
import { useDirection } from 'contexts/Direction';
import { Language } from 'tabler-icons-react';
import useStyles from './styles';

export function DirectionToggle() {
  const { classes } = useStyles();
  const { toggleDirection } = useDirection();

  const onToggle = () => {
    toggleDirection();
  };

  return (
    <ActionIcon onClick={onToggle} size="lg" className={classes.root}>
      <Language width={20} height={20} />
    </ActionIcon>
  );
}
