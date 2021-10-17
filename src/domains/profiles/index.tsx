import React from "react";
import { Container } from "@chakra-ui/react";
// import AppCheckBox from "../../shared/components/checkbox";
import StackCheckboxRoot from "./components/stackChackbox/root";
import StackCheckboxParent from "./components/stackChackbox/parent";

const Profiles = () => {
  return (
    <Container maxW="container.xl" centerContent h="100%">
      <StackCheckboxRoot />
      <StackCheckboxParent title="Análise" />
      <StackCheckboxParent title="Contas" />
      <StackCheckboxParent title="Customização" />
      <StackCheckboxParent title="Financeiro" />
    </Container>
  );
};

export default Profiles;
