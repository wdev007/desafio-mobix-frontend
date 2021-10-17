import React from "react";
import { Checkbox } from "@chakra-ui/react";

interface IProps {
  isCheked: boolean;
  handleChange: () => void;
}

const AppCheckBox: React.FC<IProps> = ({
  isCheked,
  children,
  handleChange,
}) => {
  return (
    <Checkbox
      isChecked={isCheked}
      onChange={handleChange}
      colorScheme="blackAlpha"
    >
      {children}
    </Checkbox>
  );
};

export default AppCheckBox;
