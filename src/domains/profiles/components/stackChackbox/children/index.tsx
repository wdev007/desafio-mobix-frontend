import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

interface IProps {
  title: string;
}

const StackCheckboxChildren: React.FC<IProps> = ({ title }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%" h="50px">
      <Box w="20%">
        <Flex>
          <Text fontSize="xl" marginRight="18px">
            {title}
          </Text>
        </Flex>
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
  );
};

export default StackCheckboxChildren;
