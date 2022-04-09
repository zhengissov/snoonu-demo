import { ReactNode } from 'react';

export type Direction = 'ltr' | 'rtl';

export type DirectionContextProps = {
  direction: Direction;
  toggleDirection(direction?: Direction): void;
};

export type DirectionProviderProps = DirectionContextProps & {
  children: ReactNode;
};
