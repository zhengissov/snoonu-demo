import { useContext } from 'react';
import { DirectionContext } from './provider';

export function useDirection() {
  const ctx = useContext(DirectionContext);

  if (!ctx) {
    throw new Error(
      'useDirection hook was called outside of context, make sure your app is wrapped with DirectionProvider component'
    );
  }

  return ctx;
}
