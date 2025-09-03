import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const PlayOutline: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M64.3052 51.7581C55.9891 59.2902 45.5971 66.0662 34.1611 70.6742C24.4288 74.5102 16.2768 69.7262 15.0808 60.1342C13.6248 45.9941 13.6568 32.4581 15.0808 19.822C16.3848 9.85397 25.3648 5.62195 34.1611 9.32597C45.4211 13.938 55.5211 20.198 64.3052 28.242C71.8092 35.0381 71.9852 44.6981 64.3052 51.7581Z" fill="none" stroke="black" stroke-width="6"/>
    </Icon>
  );
};

export default PlayOutline;
