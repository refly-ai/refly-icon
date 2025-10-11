import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Stop: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9999 8C16.3758 8 8 16.3758 8 40C8 63.6242 16.3758 72 39.9999 72C63.6274 72 71.9999 63.6242 71.9999 40C71.9999 16.3758 63.6274 8 39.9999 8Z" />
    </Icon>
  );
};

export default Stop;
