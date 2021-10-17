import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

const StackCheckboxRoot = () => {
  return (
    <Box w="100%" padding="0 16px" bg="#EFF1F1">
      <Flex justifyContent="space-between" w="100%">
        <Box w="30%">
          <h2>Todos</h2>
        </Box>
        <Flex justifyContent="space-between" w="70%">
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={true} handleChange={() => {}} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StackCheckboxRoot;
