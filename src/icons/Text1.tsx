import type React from "react";
import { Icon, type IconProps } from "../components/Icon";

export const Text1: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        d="M1.5 3.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H6.75M12 3.5V2.5C12 1.94772 11.5523 1.5 11 1.5H6.75M6.75 1.5V10.5M5.5 10.5H8"
        fill="black"
      />
    </Icon>
  );
};

export default Text1;
