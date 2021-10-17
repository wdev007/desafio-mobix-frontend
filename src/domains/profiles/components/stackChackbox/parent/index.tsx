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
          <AccordionButton bg="#F8F8F8">
            {/* <Box flex="1" textAlign="left">
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
            </Box> */}
            <Box w="100%">
              <Flex justifyContent="space-between" w="100%">
                <Box w="30%">
                  <Flex>
                    <h2>{title}</h2>
                    <AccordionIcon />
                  </Flex>
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
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box w="100%">
            <Flex justifyContent="space-between" w="100%">
              <Box w="30%">
                <Flex>
                  <h4>Sub modulo 1</h4>
                </Flex>
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
          <Box w="100%">
            <Flex justifyContent="space-between" w="100%">
              <Box w="30%">
                <Flex>
                  <h4>Sub modulo 2</h4>
                </Flex>
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
          <Box w="100%">
            <Flex justifyContent="space-between" w="100%">
              <Box w="30%">
                <Flex>
                  <h4>Sub modulo 3</h4>
                </Flex>
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default StackCheckboxParent;
