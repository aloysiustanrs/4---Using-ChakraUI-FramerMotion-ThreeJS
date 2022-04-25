import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Nav from "./Nav";

const layout = ({ children }) => {
  return (
    <Container maxW="container.md" boxSizing="initial" overflowX="hidden">
      <Nav />
      <Box pt="160px" />

      <Container maxW="container.sm">{children}</Container>
    </Container>
  );
};

export default layout;
