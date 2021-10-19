import React from "react";
import { Router } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import AppProvider from "./shared/contexts/app";
import Routes from "./shared/routes";
import history from "./shared/services/history";
import light from "./shared/themes/light";
import { ProfilesCheckedsProvider } from "./domains/profiles/contexts/profilesCheckeds";

export const App = () => (
  <ChakraProvider theme={light}>
    <ColorModeScript initialColorMode="light" />
    <AppProvider>
      <ProfilesCheckedsProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ProfilesCheckedsProvider>
    </AppProvider>
  </ChakraProvider>
);
