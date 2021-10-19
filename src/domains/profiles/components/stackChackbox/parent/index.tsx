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
import { ISubModule } from "../../../interfaces/ISubmodule";
import { IBoxes } from "../../../interfaces/IBoxes";

interface IProps {
  title: string;
  id: string;
  subModules: ISubModule[];
  boxes: IBoxes[];
}

const StackCheckboxParent: React.FC<IProps> = ({
  title,
  subModules,
  boxes,
  id,
}) => {
  return (
    <Accordion allowToggle w="100%">
      {console.log("boxes 1: ", boxes)}
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
                {boxes.map((b) => (
                  <Flex justifyContent="flex-start" w="15%" key={b.id}>
                    <AppCheckBox isCheked={b.checked} handleChange={() => {}} />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {subModules.map((item) => (
            <StackCheckboxChildren
              key={item.id}
              title={item.name}
              boxes={item.boxes}
              feature={item.id}
              parentId={id}
            />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default StackCheckboxParent;
