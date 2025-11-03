import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Home: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <g transform="translate(5.3, 6.5) scale(3.6)" stroke="black">
        <path d="M8.20898 1.48242C9.03094 0.838257 10.1698 0.838964 10.9873 1.48047V1.48145L17.8965 6.95312C17.2468 6.76249 16.5234 7.23449 16.5234 7.98535V14.3643C16.5232 15.8279 15.3286 17.0215 13.8623 17.0215H5.33789C3.87043 17.0215 2.67697 15.8277 2.67676 14.3643V7.98535C2.67676 7.23447 1.95245 6.76145 1.30273 6.95215L8.20898 1.48242Z" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </Icon>
  );
};

export default Home;

