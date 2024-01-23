import React from "react";

import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";
import MainNavigator from "./src/routes/MainNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({
    config: {
      fontFamily: "PlusJakartaSans",
    },
    isV3: true,
  }),
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <MainNavigator />
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
