import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const StopCircle: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g transform="scale(5)">
        <rect x="2" y="2" width="12" height="12" rx="6" stroke={props.color || 'currentColor'} fill="none" strokeOpacity="0.8" strokeWidth="1.5"/>
        <rect x="6" y="6" width="4" height="4" rx="1" fill={props.color || 'currentColor'} fillOpacity="0.8"/>
      </g>
    </Icon>
  );
};

export default StopCircle;

