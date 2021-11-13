import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./compoents/Layout";
import ConnectButton from "./compoents/ConnetButton";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
