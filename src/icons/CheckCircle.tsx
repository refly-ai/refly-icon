import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const CheckCircle: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g transform="scale(3.6) translate(2.1, 2.1)">
        <rect width="18" height="18" rx="9" fill="url(#paint0_linear_17295_68573)"/>
        <path d="M4.5 9.5L7.625 12.625L13.75 6.5" fill="none" stroke="#FFFCE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_17295_68573" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#18CBD1"/>
            <stop offset="1" stopColor="#0E9F77"/>
          </linearGradient>
        </defs>
      </g>
    </Icon>
  );
};

export default CheckCircle;

