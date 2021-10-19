import React, { useContext } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";
import ProfilesCheckedsContext from "../../../contexts/profilesCheckeds";
import { IBoxes } from "../../../interfaces/IBoxes";

interface IProps {
  title: string;
  parentId: string;
  feature: string;
  boxes: IBoxes[];
}

const StackCheckboxChildren: React.FC<IProps> = ({
  title,
  boxes,
  parentId,
  feature,
}) => {
  const { selectOne } = useContext(ProfilesCheckedsContext);
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
        {boxes.map((item) => (
          <Flex justifyContent="flex-start" w="15%">
            <AppCheckBox
              isCheked={item.checked}
              handleChange={() =>
                selectOne(feature, parentId, item.id, item.checked)
              }
            />
          </Flex>
        ))}
        {/* <Flex justifyContent="flex-start" w="15%">
          <AppCheckBox
            isCheked={true}
            handleChange={() => selectOne("FEATURE 2")}
          />
        </Flex>
        <Flex justifyContent="flex-start" w="15%">
          <AppCheckBox
            isCheked={true}
            handleChange={() => selectOne("FEATURE 3")}
          />
        </Flex>
        <Flex justifyContent="flex-start" w="15%">
          <AppCheckBox
            isCheked={true}
            handleChange={() => selectOne("FEATURE 4")}
          />
        </Flex>
        <Flex justifyContent="flex-start" w="15%">
          <AppCheckBox
            isCheked={true}
            handleChange={() => selectOne("FEATURE 5")}
          />
        </Flex> */}
      </Flex>
    </Flex>
  );
};

export default StackCheckboxChildren;
