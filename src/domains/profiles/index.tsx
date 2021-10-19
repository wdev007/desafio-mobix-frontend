import React, { useContext } from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import StackCheckboxRoot from "./components/stackChackbox/root";
import StackCheckboxParent from "./components/stackChackbox/parent";
import ProfilesCheckedsContext from "./contexts/profilesCheckeds";
// import { IModule } from "./interfaces/IModule";

// import responseProfiles from "../../mock/profiles.json";

const Profiles = () => {
  const { modules } = useContext(ProfilesCheckedsContext);

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
        {modules.map((item) => (
          <StackCheckboxParent
            title={item.name}
            key={item.id}
            id={item.id}
            subModules={item.submodules}
            boxes={item.boxes}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Profiles;
