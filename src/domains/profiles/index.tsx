import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import StackCheckboxRoot from "./components/stackChackbox/root";
import StackCheckboxParent from "./components/stackChackbox/parent";

const Profiles = () => {
  return (
    <Container maxW="80%" centerContent h="100%" minH="50vh" marginTop="50px">
      <Flex flexDirection="column" w="100%" h="100%">
        <Text
          fontSize="x-large"
          fontWeight="bold"
          marginRight="18px"
          marginBottom="100px"
        >
          Tabela de Permissões
        </Text>
        <StackCheckboxRoot />
        <StackCheckboxParent
          title="Análise"
          subModules={[
            { title: "Análise de contas" },
            { title: "Análisá de transações" },
          ]}
        />
        <StackCheckboxParent
          title="Contas"
          subModules={[
            { title: "Cliente" },
            { title: "Transações" },
            { title: "Contas digitais" },
          ]}
        />
        <StackCheckboxParent
          title="Customização"
          subModules={[
            { title: "Limites e horários" },
            { title: "Tarifas" },
            { title: "Tarifas personalizadas" },
            { title: "Conta" },
          ]}
        />
        <StackCheckboxParent
          title="Financeiro"
          subModules={[{ title: "Entradas" }]}
        />
      </Flex>
    </Container>
  );
};

export default Profiles;
