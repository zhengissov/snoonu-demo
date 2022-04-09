import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    // background: theme.colorScheme === 'dark' ? theme.colors.background[1] : theme.colors.gray[7],
    borderRadius: theme.radius.xl,
  },
  img: {
    maxWidth: '100%',
    borderRadius: theme.radius.xl,
  },
  title: {
    marginTop: 16,
  },
  cats: {
    marginTop: 4,
    marginBottom: 4,
    color: '#8C8C8D',
  },
}));
