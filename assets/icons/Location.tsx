import { IconProps } from 'assets/icons/props';

export default function Location({ color = 'currentColor' }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 6.95238C13 9.68751 9.875 13.1429 8 15C6.125 13.1429 3 9.68751 3 6.95238C3 4.21726 5.23858 2 8 2C10.7614 2 13 4.21726 13 6.95238Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="7.99984" cy="7.00008" rx="1.33333" ry="1.33333" fill={color} />
    </svg>
  );
}
