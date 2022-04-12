import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    borderRadius: theme.radius.xl,
  },
  imgWrap: {
    position: 'relative',
    height: 156,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: theme.radius.xl,
  },
  delivery: {
    bottom: 8,
    left: theme.dir === 'ltr' ? 8 : 'auto',
    right: theme.dir === 'rtl' ? 8 : 'auto',
    position: 'absolute',
    padding: '8px 20px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(9px)',
    borderRadius: `0 ${theme.radius.xl}px ${theme.radius.xl}px ${theme.radius.xl}px`,
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
