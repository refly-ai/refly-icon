import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const More: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35 61.2499C35 58.3513 37.3514 55.9999 40.25 55.9999C43.1486 55.9999 45.5 58.3513 45.5 61.2499C45.5 64.1485 43.1486 66.4999 40.25 66.4999C37.3514 66.4999 35 64.1485 35 61.2499Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35 19.25C35 16.3514 37.3514 14 40.25 14C43.1486 14 45.5 16.3514 45.5 19.25C45.5 22.1487 43.1486 24.5 40.25 24.5C37.3514 24.5 35 22.1487 35 19.25Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35 40.2499C35 37.3513 37.3514 34.9999 40.25 34.9999C43.1486 34.9999 45.5 37.3513 45.5 40.2499C45.5 43.1485 43.1486 45.4999 40.25 45.4999C37.3514 45.4999 35 43.1485 35 40.2499Z" />
    </Icon>
  );
};

export default More;
