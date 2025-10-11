import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const ArrowDown: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M64.3855 23.6976C65.8988 22.1843 68.3517 22.1843 69.865 23.6976C71.3783 25.2109 71.3783 27.6638 69.865 29.1771L42.7398 56.3024C41.2265 57.8157 38.7735 57.8157 37.2602 56.3024L10.135 29.1771C8.62168 27.6638 8.62168 25.2109 10.135 23.6976C11.6483 22.1843 14.1012 22.1843 15.6145 23.6976L40 48.0831L64.3855 23.6976Z" />
    </Icon>
  );
};

export default ArrowDown;
