import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Text1: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M15 25V19.44C15 17.01 16.91 15.1 19.34 15.1H41.25M67.5 25V19.44C67.5 17.01 65.59 15.1 63.16 15.1H41.25M41.25 15.1V65M36.67 65H45.83" stroke="black" strokeWidth="5.56" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};

export default Text1;
