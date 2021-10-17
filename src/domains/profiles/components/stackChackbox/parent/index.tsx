import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

interface IProps {
  title: string;
}

const StackCheckboxParent: React.FC<IProps> = ({ title }) => {
  return (
    <Accordion allowToggle w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Flex>
                <h2>{title}</h2>
                <AccordionIcon />
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
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box flex="1" textAlign="left">
            <h4>Sub modulo 1</h4>
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
          </Box>
          <Box flex="1" textAlign="left">
            <Flex>
              <h4>Sub modulo 2</h4>
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
            </Flex>
          </Box>
          <Box flex="1" textAlign="left">
            <Flex>
              <h4>Sub modulo 3</h4>
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
              <AppCheckBox isCheked={false} handleChange={() => {}} />
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default StackCheckboxParent;
