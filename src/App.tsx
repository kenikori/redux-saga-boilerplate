import "./App.css";

import { Box, Container } from "@chakra-ui/react";

import { PostBox } from "./components/PostBox/PostBox";
import { Toast } from "./components/Toast/Toast";
import { UserBox } from "./components/UserBox/UserBox";

function App() {
  Toast();

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
