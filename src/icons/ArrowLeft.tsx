import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const ArrowLeft: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M56.8022 64.3855C58.3155 65.8988 58.3155 68.3517 56.8022 69.865C55.2889 71.3783 52.8359 71.3783 51.3226 69.865L24.1974 42.7398C22.6841 41.2265 22.6841 38.7735 24.1974 37.2602L51.3226 10.135C52.8359 8.62168 55.2889 8.62168 56.8022 10.135C58.3155 11.6483 58.3155 14.1012 56.8022 15.6145L32.4167 40L56.8022 64.3855Z" />
    </Icon>
  );
};

export default ArrowLeft;
