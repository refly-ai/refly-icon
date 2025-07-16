import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Weather: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5783 32.9743C57.8272 26.8303 52.9362 16.3916 40.5 16.3916C28.0638 16.3916 23.1728 26.8303 22.4251 32.9743C14.1488 33.7357 8.5 39.9369 8.5 48.5264C8.5 54.6637 12.1109 60.2654 17.7699 62.8254C19.8213 63.6405 22.0309 64.0885 23.9947 64.0885H56.9851C58.1674 64.0885 60.5522 63.9235 63.3143 62.795C68.8958 60.2687 72.5 54.667 72.5 48.5264C72.5 39.9369 66.8512 33.7357 58.5783 32.9743Z" fill="black"/>
    </Icon>
  );
};

export default Weather;
