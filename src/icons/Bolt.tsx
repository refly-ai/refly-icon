import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Bolt: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g transform="scale(3.5) translate(2, 0.5)">
        <path d="M10.4325 1L1.52593 11.6879C1.17713 12.1064 1.00272 12.3157 1.00006 12.4925C0.99774 12.6461 1.06621 12.7923 1.18574 12.8889C1.32323 13 1.59566 13 2.14051 13H9.43248L8.43248 21L17.339 10.3121C17.6878 9.89358 17.8622 9.68429 17.8649 9.50754C17.8672 9.35388 17.7987 9.2077 17.6792 9.11111C17.5417 9 17.2693 9 16.7244 9H9.43248L10.4325 1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </Icon>
  );
};

export default Bolt;

