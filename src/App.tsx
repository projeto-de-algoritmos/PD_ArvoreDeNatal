import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Main from './pages/Main';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Main />
  </ChakraProvider>
)
