import { createContext } from 'react';
import { DirectionContextProps, DirectionProviderProps } from './types';

export const DirectionContext = createContext<DirectionContextProps>({} as DirectionContextProps);

export function DirectionProvider(props: DirectionProviderProps) {
  const { direction, toggleDirection, children } = props;

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}

DirectionProvider.displayName = 'DirectionProvider';
