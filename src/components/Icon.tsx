import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  children, 
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            fill: color,
          });
        }
        return child;
      })}
    </svg>
  );
}; 