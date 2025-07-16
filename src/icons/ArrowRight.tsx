import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const ArrowRight: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M23.6976 15.6145C22.1843 14.1012 22.1843 11.6483 23.6976 10.135C25.2109 8.62167 27.6638 8.62167 29.1771 10.135L56.3024 37.2602C57.8157 38.7735 57.8157 41.2265 56.3024 42.7398L29.1771 69.865C27.6638 71.3783 25.2109 71.3783 23.6976 69.865C22.1843 68.3517 22.1843 65.8988 23.6976 64.3855L48.0831 40L23.6976 15.6145Z" fill="black"/>
    </Icon>
  );
};

export default ArrowRight;
