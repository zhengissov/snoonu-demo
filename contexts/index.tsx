import { PropsWithChildren, useState } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';
import { setCookies } from 'cookies-next';
import { Direction, DirectionProvider } from 'contexts/Direction';
import { theme } from 'contexts/Mantine/theme';

type Props = PropsWithChildren<{
  colorScheme: ColorScheme;
  direction: Direction;
}>;

export function Providers(props: Props) {
  const { children } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [direction, setDirection] = useState<Direction>(props.direction);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const toggleDirection = (value?: Direction) => {
    const nextDirection = value || (direction === 'rtl' ? 'ltr' : 'rtl');
    setDirection(nextDirection);
    document.querySelector('html')?.setAttribute('dir', nextDirection);
    setCookies('mantine-direction', nextDirection, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <DirectionProvider direction={direction} toggleDirection={toggleDirection}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </DirectionProvider>
    </ColorSchemeProvider>
  );
}
