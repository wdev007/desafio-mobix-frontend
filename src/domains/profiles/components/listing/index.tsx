import React from "react";
import { Box } from "@chakra-ui/react";
import StackCheckboxRoot from "../stackChackbox/root";
import StackCheckboxParent from "../stackChackbox/parent";

const Listing = () => {
  return (
    <Box>
      <StackCheckboxRoot />
      <StackCheckboxParent title="Análise" />
      <StackCheckboxParent title="Contas" />
      <StackCheckboxParent title="Customização" />
      <StackCheckboxParent title="Financeiro" />
    </Box>
  );
};

export default Listing;
