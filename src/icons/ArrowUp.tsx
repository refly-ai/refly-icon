import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const ArrowUp: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M15.6145 54.8022C14.1012 56.3155 11.6483 56.3155 10.135 54.8022C8.62167 53.2889 8.62167 50.8359 10.135 49.3226L37.2602 22.1974C38.7735 20.6841 41.2265 20.6841 42.7398 22.1974L69.865 49.3226C71.3783 50.8359 71.3783 53.2889 69.865 54.8022C68.3517 56.3155 65.8988 56.3155 64.3855 54.8022L40 30.4167L15.6145 54.8022Z" />
    </Icon>
  );
};

export default ArrowUp;
