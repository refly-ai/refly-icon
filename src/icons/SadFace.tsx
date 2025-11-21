import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const SadFace: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g transform="scale(3.5) translate(2.4, 2.45)">
        <rect width="18" height="18" rx="9" fill="url(#paint0_linear_14758_233993)"/>
        <path d="M12.334 12.3333C12.334 12.3333 11.084 10.6666 9.00065 10.6666C6.91732 10.6666 5.66732 12.3333 5.66732 12.3333M13.1673 6.69995C12.8382 7.10412 12.3882 7.33328 11.9173 7.33328C11.4465 7.33328 11.009 7.10412 10.6673 6.69995M7.33398 6.69995C7.00482 7.10412 6.55482 7.33328 6.08398 7.33328C5.61315 7.33328 5.17565 7.10412 4.83398 6.69995" stroke="#404D4E" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_14758_233993" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
            <stop stop-color="#99AEAF"/>
            <stop offset="1" stop-color="#768787"/>
        </linearGradient>
        </defs>
    </g>
    </Icon>
  );
};

export default SadFace;

