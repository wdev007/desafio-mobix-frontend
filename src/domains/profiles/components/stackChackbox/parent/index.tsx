import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  AccordionIcon,
  Flex,
  Text,
} from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";
import StackCheckboxChildren from "../children";

interface ISubModule {
  title: string;
}

interface IProps {
  title: string;
  subModules: ISubModule[];
}

const StackCheckboxParent: React.FC<IProps> = ({ title, subModules }) => {
  return (
    <Accordion allowToggle w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton bg="#F8F8F8">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              h="50px"
            >
              <Box w="20%">
                <Flex alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" marginRight="18px">
                    {title}
                  </Text>
                  <AccordionIcon />
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
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {subModules.map((submodule) => (
            <StackCheckboxChildren title={submodule.title} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
/**
 *  <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="50px"
          >
            <Box w="20%">
              <Flex>
                <h4>Sub modulo 1</h4>
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
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="50px"
          >
            <Box w="20%">
              <Flex>
                <h4>Sub modulo 2</h4>
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
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="50px"
          >
            <Box w="20%">
              <Flex>
                <h4>Sub modulo 3</h4>
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
 */
export default StackCheckboxParent;
