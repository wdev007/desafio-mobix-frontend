import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

const StackCheckboxRoot = () => {
  return (
    <>
      <Flex justifyContent="space-between" w="100%" padding="0 16px">
        <Box w="16%" />
        <Flex justifyContent="space-between" w="84%">
          <Flex justifyContent="flex-start" w="20%">
            <Text fontSize="xl" fontWeight="bold">
              Ver listagem
            </Text>
          </Flex>
          <Flex justifyContent="flex-start" w="20%">
            <Text fontSize="xl" fontWeight="bold">
              Ver detalhes
            </Text>
          </Flex>
          <Flex justifyContent="flex-start" w="20%" paddingLeft="42px">
            <Text fontSize="xl" fontWeight="bold">
              Criar
            </Text>
          </Flex>
          <Flex justifyContent="flex-start" w="20%" paddingLeft="46px">
            <Text fontSize="xl" fontWeight="bold">
              Editar
            </Text>
          </Flex>
          <Flex justifyContent="flex-start" w="20%" paddingLeft="38px">
            <Text fontSize="xl" fontWeight="bold">
              Deletar
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        padding="0 16px"
        bg="#EFF1F1"
        h="50px"
      >
        <Box w="20%">
          <Text fontSize="xl" fontWeight="bold">
            Todos
          </Text>
        </Box>
        <Flex justifyContent="space-between" w="80%">
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default StackCheckboxRoot;
