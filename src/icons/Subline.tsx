import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Subline: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M34 27.1001V11.4965C34 9.88388 35.3073 8.5766 36.9199 8.5766C38.5325 8.5766 39.8398 9.88388 39.8398 11.4965V27.1001C39.8398 37.5796 48.3387 46.0794 58.823 46.0794H71.0801L71.3767 46.0946C72.849 46.244 73.9999 47.4875 74 48.9993C74 50.5112 72.8491 51.7546 71.3767 51.904L71.0801 51.9192H58.823C45.1142 51.9192 34 40.8056 34 27.1001Z" />
    </Icon>
  );
};

export default Subline;
