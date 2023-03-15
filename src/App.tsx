import "./App.css";

import { Box, Container } from "@chakra-ui/react";

import { PostBox } from "./components/PostBox/PostBox";
import { UserBox } from "./components/UserBox/UserBox";

function App() {
  return (
      <Container maxW="md">
        <Box maxW="md" margin={2}>
          <UserBox />
        </Box>
        <Box maxW="md" margin={2}>
          <PostBox />
        </Box>
      </Container>
  );
}

export default App;
