import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

const StackCheckboxRoot = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <h2>Todos</h2>
        <Flex justifyContent="space-between" w="80%">
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={false} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={false} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={false} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={false} handleChange={() => {}} />
          </Flex>
          <Flex justifyContent="flex-start" w="10%">
            <AppCheckBox isCheked={false} handleChange={() => {}} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StackCheckboxRoot;
