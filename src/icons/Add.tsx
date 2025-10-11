import React from 'react';
import { Icon, IconProps } from '../components/Icon';

export const Add: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40 10C42.367 10 44.2857 11.9188 44.2857 14.2857V35.7143H65.7143C68.0813 35.7143 70 37.633 70 40C70 42.367 68.0813 44.2857 65.7143 44.2857H44.2857V65.7143C44.2857 68.0813 42.367 70 40 70C37.633 70 35.7143 68.0813 35.7143 65.7143V44.2857H14.2857C11.9188 44.2857 10 42.367 10 40C10 37.633 11.9188 35.7143 14.2857 35.7143H35.7143V14.2857C35.7143 11.9188 37.633 10 40 10Z" />
    </Icon>
  );
};

export default Add;
