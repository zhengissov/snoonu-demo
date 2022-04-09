import { MantineThemeOverride } from '@mantine/styles/lib/theme/types';

export const theme: MantineThemeOverride = {
  primaryColor: 'red',
  colors: {
    red: [
      '#ffe2e6',
      '#ffb1ba',
      '#ff808c',
      '#fe4d5f',
      '#fd1c32',
      '#e30218',
      '#b20012',
      '#7f000b',
      '#4f0005',
      '#200000',
    ],
    background: [
      '#FFFFFF',
      '#F5F5F5',
      '#E5E5E5',
      '#D5D5D5',
      '#C5C5C5',
      '#B5B5B5',
      '#A5A5A5',
      '#959595',
      '#858585',
      '#757575',
    ],
  },
  headings: {
    sizes: {
      h1: {
        fontSize: 72,
      },
    },
  },
};
